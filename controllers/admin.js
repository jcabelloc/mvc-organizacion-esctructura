const Producto = require('../models/producto');

exports.getCrearProducto = (req, res, next) => {
  res.render('admin/crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' });
};

exports.postCrearProducto = (req, res, next) => {
  const nombre = req.body.nombre;
  const urlImagen = req.body.urlImagen;
  const precio = req.body.precio;
  const descripcion = req.body.descripcion;
  const producto = new Producto(nombre, urlImagen, descripcion, precio);
  producto.save();
  res.redirect('/')
};

exports.getProductos = (req, res, next) => {
    Producto.fetchAll(productos => {
      res.render('admin/productos', {
        prods: productos,
        titulo: 'Admin Productos',
        path: '/admin/productos'
      });
    });
  };