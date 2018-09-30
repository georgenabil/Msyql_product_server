const express = require('express')
const cors = require('cors');
const app = express();
const dbcon = require("./db/connection");
const Product = require('./models/product.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

dbcon.connect(err => {
    if (err) {
        return err;
    }
})



app.post("/AddProduct", (req, res) => {
    console.log(req.body);
    Product.addProd(req.body, (err, result) => {
        err ? console.log(err) : res.status(200).json(result);
    });
})



app.listen(port = 4000, () => {
    console.log(`this server is running on  port ${port}`)

})



