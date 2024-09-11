const Producto = require('../models/producto');

exports.getCrearProducto = (req, res, next) => {
  res.render('admin/crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' });
};

exports.postCrearProducto = (req, res, next) => {
  const producto = new Producto(req.body.nombre);
  producto.save();
  res.redirect('/')
};

exports.getProductos = (req, res, next) => {
  Producto.fetchAll(productos => {
    res.render('tienda/lista-productos', {prods: productos, titulo: 'La Tienda', path: '/'});
  });
};
