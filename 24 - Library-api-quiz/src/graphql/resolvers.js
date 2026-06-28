const { GraphQLError } = require('graphql');
const db = require('../../db/database.js');

const resolvers = {
  Query: {
    authors: () => {
      return db.prepare('SELECT * FROM authors').all();
    },
    author: (_, { id }) => {
      const row = db.prepare('SELECT * FROM authors WHERE id = ?').get(id);
      return row || null;
    },
    books: (_, { authorId }) => {
      if (authorId) {
        return db.prepare('SELECT * FROM books WHERE author_id = ?').all(authorId);
      }
      return db.prepare('SELECT * FROM books').all();
    },
    book: (_, { id }) => {
      const row = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
      return row || null;
    },
    loans: (_, { returned }) => {
      if (returned === true) {
        return db.prepare('SELECT * FROM loans WHERE returned_at IS NOT NULL').all();
      } else if (returned === false) {
        return db.prepare('SELECT * FROM loans WHERE returned_at IS NULL').all();
      }
      return db.prepare('SELECT * FROM loans').all();
    },
    loan: (_, { id }) => {
      const row = db.prepare('SELECT * FROM loans WHERE id = ?').get(id);
      return row || null;
    }
  },

  Mutation: {
    createAuthor: (_, { name, bio }) => {
      const result = db.prepare('INSERT INTO authors (name, bio) VALUES (?, ?)').run(name, bio);
      return { id: result.lastInsertRowid, name, bio };
    },
    updateAuthor: (_, { id, name, bio }) => {
      const author = db.prepare('SELECT * FROM authors WHERE id = ?').get(id);
      if (!author) return null;

      const newName = name !== undefined ? name : author.name;
      const newBio = bio !== undefined ? bio : author.bio;

      db.prepare('UPDATE authors SET name = ?, bio = ? WHERE id = ?').run(newName, newBio, id);
      return { id, name: newName, bio: newBio };
    },
    deleteAuthor: (_, { id }) => {
      const author = db.prepare('SELECT * FROM authors WHERE id = ?').get(id);
      if (!author) return false;

      db.prepare('DELETE FROM loans WHERE book_id IN (SELECT id FROM books WHERE author_id = ?)').run(id);
      db.prepare('DELETE FROM books WHERE author_id = ?').run(id);
      db.prepare('DELETE FROM authors WHERE id = ?').run(id);
      return true;
    },

    createBook: (_, { title, year, authorId }) => {
      const author = db.prepare('SELECT * FROM authors WHERE id = ?').get(authorId);
      if (!author) {
        throw new GraphQLError(`Author with ID ${authorId} does not exist`);
      }
      const result = db.prepare('INSERT INTO books (title, year, author_id) VALUES (?, ?, ?)').run(title, year, authorId);
      return { id: result.lastInsertRowid, title, year, author_id: authorId };
    },
    updateBook: (_, { id, title, year, authorId }) => {
      const book = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
      if (!book) return null;

      if (authorId) {
        const author = db.prepare('SELECT * FROM authors WHERE id = ?').get(authorId);
        if (!author) throw new GraphQLError(`Author with ID ${authorId} does not exist`);
      }

      const newTitle = title !== undefined ? title : book.title;
      const newYear = year !== undefined ? year : book.year;
      const newAuthorId = authorId !== undefined ? authorId : book.author_id;

      db.prepare('UPDATE books SET title = ?, year = ?, author_id = ? WHERE id = ?').run(newTitle, newYear, newAuthorId, id);
      return { id, title: newTitle, year: newYear, author_id: newAuthorId };
    },
    deleteBook: (_, { id }) => {
      const book = db.prepare('SELECT * FROM books WHERE id = ?').get(id);
      if (!book) return false;

      db.prepare('DELETE FROM loans WHERE book_id = ?').run(id);
      db.prepare('DELETE FROM books WHERE id = ?').run(id);
      return true;
    },

    checkoutBook: (_, { bookId, borrowerName }) => {
      const book = db.prepare('SELECT * FROM books WHERE id = ?').get(bookId);
      if (!book) {
        throw new GraphQLError(`Book with ID ${bookId} not found`);
      }

      const activeLoan = db.prepare('SELECT * FROM loans WHERE book_id = ? AND returned_at IS NULL').get(bookId);
      if (activeLoan) {
        throw new GraphQLError(`Book with ID ${bookId} is already on an active loan`);
      }

      const loanedAt = new Date().toISOString().split('T')[0]; 
      const result = db.prepare('INSERT INTO loans (book_id, borrower_name, loaned_at) VALUES (?, ?, ?)').run(bookId, borrowerName, loanedAt);
      
      return {
        id: result.lastInsertRowid,
        book_id: bookId,
        borrower_name: borrowerName,
        loaned_at: loanedAt,
        returned_at: null
      };
    },
    returnBook: (_, { loanId }) => {
      const loan = db.prepare('SELECT * FROM loans WHERE id = ?').get(loanId);
      if (!loan) {
        throw new GraphQLError(`Loan with ID ${loanId} not found`);
      }
      if (loan.returned_at) {
        throw new GraphQLError(`Loan with ID ${loanId} has already been returned`);
      }

      const returnedAt = new Date().toISOString().split('T')[0];
      db.prepare('UPDATE loans SET returned_at = ? WHERE id = ?').run(returnedAt, loanId);

      return {
        ...loan,
        returned_at: returnedAt
      };
    }
  },

  Author: {
    books: (parent) => {
      return db.prepare('SELECT * FROM books WHERE author_id = ?').all(parent.id);
    }
  },
  Book: {
    author: (parent) => {
      return db.prepare('SELECT * FROM authors WHERE id = ?').get(parent.author_id);
    }
  },
  Loan: {
    book: (parent) => {
      return db.prepare('SELECT * FROM books WHERE id = ?').get(parent.book_id);
    },
    borrowerName: (parent) => parent.borrower_name,
    loanedAt: (parent) => parent.loaned_at,
    returnedAt: (parent) => parent.returned_at
  }
};

module.exports = { resolvers };