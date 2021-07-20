const express = require('express');
// const routes = require('./routes');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send("<h1>ADD PRODUCT</h1>")
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000);