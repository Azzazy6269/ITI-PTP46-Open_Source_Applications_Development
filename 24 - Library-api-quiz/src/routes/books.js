const express = require('express');
const db = require('../../db/database');

const router = express.Router();

// GET /books
// Return all books. Optional query param: ?author_id=<id>
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
    res.status(501).json({ error });
  }
  
});

// GET /books/:id
// Return a single book including its author info. 404 if not found.
router.get('/:id', (req, res) => {
  try{
    const book = db.prepare('SELECT * FROM books WHERE id=?').get(req.params.id);
    const author = db.prepare('SELECT * FROM authors WHERE id=?').get(book.author_id);
    res.status(200).json({ book,author });
  }catch(error){
    res.status(501).json({ error });
  }
});

// POST /books
// Create a new book. Body: { title, year?, author_id }
// Respond 201 with the created book. 404 if author_id does not exist.
router.post('/', (req, res) => {
  try{
    const book = db.prepare('INSERT INTO books(title,year,author_id) VALUES(?,?,?)').run(req.body.title,req.body.year,req.body.author_id);
    res.status(201).json({ book });
  }catch(error){
    res.status(501).json({ error });
  }
});

// PATCH /books/:id
// Update title, year, or author_id. Body: { title?, year?, author_id? }
// Respond 200 with the updated book. 404 if not found.
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

// DELETE /books/:id
// Delete a book. 204 on success. 404 if not found.
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
