const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// All routes start with /admin as was set in app.js
router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product', adminController.getProducts);

router.post('/edit-product', adminController.postEditProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
