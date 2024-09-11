const path = require('path');

const express = require('express');

const productosController = require('../controllers/productos');


const router = express.Router();

// GET requiere una coincidencia exacta en la ruta
router.get('/', productosController.getProductos);

module.exports = router;