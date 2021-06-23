const express = require('express');
const app = express();
const port = 3000;

// initial ejs
app.set('view engine', 'ejs');

// home
app.get('/', (req, res) => {
   //  res.send('Hello World!');
   //  res.sendFile('./index.html', { root: __dirname });
   let produk = [
      { nama: 'sepatu', harga: 12000 },
      { nama: 'sandal', harga: 10000 },
   ];
   res.render('index', { title: 'Home', produk });
});

// product detail
app.get('/product/:id', (req, res) => {
   res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});

// error page
app.use('/', (req, res) => {
   res.status(404);
   res.send('404 not found');
});

// listen
app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
