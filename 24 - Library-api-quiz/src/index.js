const express = require('express');
const { specs, swaggerUi} = require('./swagger')

const authorsRouter = require('./routes/authors');
const booksRouter   = require('./routes/books');
const loansRouter   = require('./routes/loans');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/authors', authorsRouter);
app.use('/books',   booksRouter);
app.use('/loans',   loansRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(PORT, () => {
  console.log(`Library API running on http://localhost:${PORT}`);
});



