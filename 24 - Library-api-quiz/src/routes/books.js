const express = require('express');
const db = require('../../db/database');

const router = express.Router();

/**
 * @swagger
 * /books:
 *  get:
 *    summary: get all books or get all books belong to a specific author
 *    tags: Books, Authors
 *    parameters:
 *      in: queryparams
 *      name: author_id
 *      required: false
 *      response: 
 *        200:
 *         description: Books found
 *        404:
 *         description: Author not found
 */
router.get('/', (req, res) => {
  try{
    let books;
    if(req.query.author_id){
      books = db.prepare('SELECT * FROM books WHERE author_id=?').all(req.query.author_id);
    }else{
      books = db.prepare('SELECT * FROM books').all();
    }
    res.status(200).json({ books });
  }catch(error){
    res.status(404).json({ error });
  }
  
});

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get book by id
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book found
 *       501:
 *         description: Book not found
 */
router.get('/:id', (req, res) => {
  try{
    const book = db.prepare('SELECT * FROM books WHERE id=?').get(req.params.id);
    const author = db.prepare('SELECT * FROM authors WHERE id=?').get(book.author_id);
    res.status(200).json({ book,author });
  }catch(error){
    res.status(501).json({ error });
  }
});

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: integer
 *               author_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Author created
 *       501:
 *         description: an error occured
 */
router.post('/', (req, res) => {
  try{
    const book = db.prepare('INSERT INTO books(title,year,author_id) VALUES(?,?,?)').run(req.body.title,req.body.year,req.body.author_id);
    res.status(201).json({ book });
  }catch(error){
    res.status(501).json({ error });
  }
});

/**
 * @swagger
 * /books/{id}:
 *   patch:
 *     summary: Update an book
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated book
 *       404:
 *         description: Book or Author not found
 *       500:
 *         description: an error occured
 */
router.patch('/:id', (req, res) => {
  try {
    const { title, year, author_id } = req.body;
    const { id } = req.params;
    const book = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
    if (!book) {
      return res.status(404).json({error: 'Book not found'});
    }
    const updatedTitle = title ?? book.title;
    const updatedYear = year ?? book.year;
    const updatedAuthorId = author_id ?? book.author_id;

    if (author_id) {
      const author = db.prepare('SELECT * FROM authors WHERE id = ?').get(author_id);
      if (!author) {
        return res.status(404).json({error: 'Author not found'});
      }
    }
    db.prepare(`UPDATE books SET title = ?, year = ?, author_id = ? WHERE id = ?`).run(updatedTitle, updatedYear, updatedAuthorId, id);
    const updatedBook = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
    res.status(200).json({ book: updatedBook });

  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete('/:id', (req, res) => {
  try{
    const book = db.prepare('DELETE FROM books where id=?').run(req.params.id);
    if (book.changes === 0) {
      return res.status(404).json({
        error: 'Book not found'
      });
    }
    res.status(204).json({ book });
  }catch(error){
    res.status(404).json({ error });
  }
});

module.exports = router;
