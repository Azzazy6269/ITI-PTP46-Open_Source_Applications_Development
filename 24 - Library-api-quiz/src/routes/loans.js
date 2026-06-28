const express = require('express');
const db = require('../../db/database');

const router = express.Router();

/**
 * @swagger
 * /books:
 *  get:
 *    summary: get all loans
 *    tags: Loans
 *    parameters:
 *      in: queryparams
 *      name: returned
 *      required: false
 *      response: 
 *        200:
 *         description: loans found
 *        500:
 *         description: an error occured
 */
router.get('/', (req, res) => {
  try {
    let loans;

    if (req.query.returned !== undefined) {
      const returned = req.query.returned === 'true';

      if (returned) {
        loans = db
          .prepare('SELECT * FROM loans WHERE returned_at IS NOT NULL')
          .all();
      } else {
        loans = db
          .prepare('SELECT * FROM loans WHERE returned_at IS NULL')
          .all();
      }
    } else {
      loans = db
        .prepare('SELECT * FROM loans')
        .all();
    }

    res.status(200).json({ loans });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

/**
 * @swagger
 * /loans/{id}:
 *   get:
 *     summary: Get loan by id
 *     tags:
 *       - Loans
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: loan found
 *       404:
 *         description: Loan not found
 *       500:
 *         description: an error occured
 */
router.get('/:id', (req, res) => {
  try {
    const loan = db.prepare(`
      SELECT 
        loans.id,
        loans.book_id,
        loans.borrower_name,
        loans.loaned_at,
        loans.returned_at,
        books.title,
        books.year,
        books.author_id
      FROM loans
      JOIN books ON loans.book_id = books.id
      WHERE loans.id = ?
    `).get(req.params.id);

    if (!loan) {
      return res.status(404).json({
        error: 'Loan not found'
      });
    }

    res.status(200).json({ loan });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

/**
 * @swagger
 * /loans:
 *   post:
 *     summary: Create a new loan
 *     tags:
 *       - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               borrower_name:
 *                 type: string
 *               book_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Author created
 *       404: 
 *         description: Book not found
 *       409: 
 *         description: Book is already on active loan
 *       501:
 *         description: an error occured
 */
router.post('/', (req, res) => {
  try {
    const { book_id, borrower_name } = req.body;
    const book = db.prepare('SELECT * FROM books WHERE id = ?').get(book_id);
    if (!book) {
      return res.status(404).json({error: 'Book not found'});
    }

    const activeLoan = db.prepare(`SELECT * FROM loans WHERE book_id = ? AND returned_at IS NULL`).get(book_id);
    if (activeLoan) {
      return res.status(409).json({error: 'Book is already on active loan'});
    }
    const result = db.prepare(`INSERT INTO loans (book_id, borrower_name) VALUES (?, ?)`).run(book_id, borrower_name);
    const loan = db.prepare('SELECT * FROM loans WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json({ loan });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

/**
 * @swagger
 * /loans/{id}/return:
 *   patch:
 *     summary: Mark a loan as returned
 *     description: Sets the returned_at field to today's date.
 *     tags:
 *       - Loans
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Loan ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Loan returned successfully
 *       404:
 *         description: Loan not found
 *       409:
 *         description: Loan already returned
 *       500:
 *         description: Internal server error
 */
router.patch('/:id/return', (req, res) => {
  try {
    const { id } = req.params;
    const loan = db.prepare('SELECT * FROM loans WHERE id = ?').get(id);
    if (!loan) {
      return res.status(404).json({error: 'Loan not found'});
    }
    if (loan.returned_at) {
      return res.status(409).json({error: 'Loan already returned'});
    }
    db.prepare(`UPDATE loans SET returned_at = date('now') WHERE id = ?`).run(id);
    const updatedLoan = db.prepare('SELECT * FROM loans WHERE id = ?').get(id);
    res.status(200).json({ loan: updatedLoan });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

module.exports = router;
