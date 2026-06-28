const express = require('express');
const db = require('../../db/database');

const router = express.Router();

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: Author found
 *       501:
 *         description: failed to fetch data
 */
router.get('/', (req, res) => {
  try{
    const authors = db.prepare('select * from authors').all();
    res.status(200).json({ authors });
  }catch(error){
    res.status(501).json({ error });
  }

});

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get author by id
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Author found
 *       404:
 *         description: Author not found
 */
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

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Create a new author
 *     tags:
 *       - Authors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Author created
 */
router.post('/', (req, res) => {
  try{
    const authors = db.prepare('insert into authors(name,bio) values(?,?)').run(req.body.name,req.body.bio);
    res.status(201).json({ authors });
  }catch(error){
    res.status(501).json({ error });
  }
});

/**
 * @swagger
 * /authors/{id}:
 *   patch:
 *     summary: Update an author
 *     tags:
 *       - Authors
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
 *         description: Updated author
 *       404:
 *         description: Author not found
 */
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

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Delete an author
 *     tags:
 *       - Authors
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
 *         description: Author not found
 */
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

/**
 * @swagger
 * /authors/{id}/books:
 *   get:
 *     summary: Get all books by an author
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of books
 *       404:
 *         description: Author not found
 */
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
