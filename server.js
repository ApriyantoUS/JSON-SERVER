const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ganti dengan nama file database Anda
const middlewares = jsonServer.defaults();

// Tambahkan middleware kustom atau logika lainnya di sini
server.use(middlewares);

// Contoh route kustom
server.get('/custom-route', (req, res) => {
  res.jsonp({ message: 'This is a custom route!' });
});

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
