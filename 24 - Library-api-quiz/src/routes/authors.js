const express = require('express');
const db = require('../../db/database');

const router = express.Router();

// GET /authors
// Return all authors.
router.get('/', (req, res) => {
  try{
    const authors = db.prepare('select * from authors').all();
    res.status(200).json({ authors });
  }catch(error){
    res.status(501).json({ error });
  }

});

// GET /authors/:id
// Return a single author. 404 if not found.
router.get('/:id', (req, res) => {
  try{
    const author = db.prepare('select * from authors where id=?').get(req.params.id);
    if (!author) {
      return res.status(404).json({
        error: 'Author not found'
      });
    }
    res.status(200).json({ author });
  }catch(error){
    res.status(404).json({ error });
  }
});

// POST /authors
// Create a new author. Body: { name, bio? }
// Respond 201 with the created author.
router.post('/', (req, res) => {
  try{
    const authors = db.prepare('insert into authors(name,bio) values(?,?)').run(req.body.name,req.body.bio);
    res.status(201).json({ authors });
  }catch(error){
    res.status(501).json({ error });
  }
});

// PATCH /authors/:id
// Update name and/or bio. Body: { name?, bio? }
// Respond 200 with the updated author. 404 if not found.
router.patch('/:id', (req, res) => {
  try{
    const {name,bio} =req.body;
    let author;
    if(name && bio){
       author = db.prepare('update authors set name=?, bio=? where id=? ').run(name,bio,req.params.id);
    }else if(name){
       author = db.prepare('update authors set name=? where id=? ').run(name,req.params.id);
    }else if(bio){
       author = db.prepare('update authors set bio=? where id=? ').run(bio,req.params.id);
    }
    if(author.changes==0) res.status(404).json({ error:"author not found" });
    res.status(200).json({ author });
  }catch(error){
    res.status(404).json({ error });
  }
});

// DELETE /authors/:id
// Delete an author and their books (cascade). 204 on success. 404 if not found.
router.delete('/:id', (req, res) => {
  try{
    const author = db.prepare('DELETE FROM authors where id=?').run(req.params.id);
    if (author.changes === 0) {
      return res.status(404).json({
        error: 'Author not found'
      });
    }
    res.status(204).json({ author });
  }catch(error){
    res.status(404).json({ error });
  }
});

// GET /authors/:id/books
// Return all books by this author. 404 if author not found.
router.get('/:id/books', (req, res) => {
  try{
    const author = db.prepare('SELECT * FROM authors WHERE id=?').get(req.params.id);
    if (!author) {
      return res.status(404).json({
        error: 'Author not found'
      });
    }
    const books = db.prepare('SELECT * FROM books WHERE author_id=?').all(req.params.id);
    
    res.status(200).json({ books });
  }catch(error){
    res.status(404).json({ error });
  }
});

module.exports = router;
