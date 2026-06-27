const express = require('express');
const db = require('../../db/database');

const router = express.Router();

// GET /loans
// Return all loans. Optional query param: ?returned=true|false
// (filter by whether returned_at is set)
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

// GET /loans/:id
// Return a single loan including book info. 404 if not found.
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

// POST /loans
// Check out a book. Body: { book_id, borrower_name }
// 404 if book not found.
// 409 if the book is already on active loan (returned_at IS NULL).
// Respond 201 with the created loan.
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

// PATCH /loans/:id/return
// Mark a loan as returned (set returned_at = today).
// 404 if loan not found. 409 if already returned.
// Respond 200 with the updated loan.
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
