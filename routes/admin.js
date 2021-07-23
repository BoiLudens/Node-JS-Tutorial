const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();


//All routes start with /admin as was set in app.js
router.get('/products', adminController.getProducts)

router.get('/add-product', adminController.getAddProduct);

router.get('/edit-product', adminController.getEditProduct);

router.post('/add-product', adminController.postAddProduct);

// router.post('/edit-product', adminController.editProduct);

module.exports = router;