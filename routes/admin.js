const path = require('path');

const express = require('express');

const productosController = require('../controllers/productos');


const router = express.Router();


router.get('/crear-producto', productosController.getCrearProducto);

router.post('/crear-producto', productosController.postCrearProducto);

module.exports = router;
