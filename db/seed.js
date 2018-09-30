const connection = require('./connection.js');

/*
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("drop table products", function (err, result) {
        if (err) { console.log(err); }
        else {
            var sql = `CREATE TABLE products ( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,DVD_player VARCHAR(30), price VARCHAR(30)); `
            connection.query(sql, function (err, result) {
                if (err) { console.log(err); }
                else connection.end();
            });
        }
    });

})

// create the order table
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");

    connection.query("drop table IF EXISTS orders", (err, result) => {
        if (err) { console.log(err) }
        else {
            var sql = `CREATE TABLE orders ( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, owner VARCHAR(30)); `
            connection.query(sql, function (err, result) {
                if (err) { console.log(err); }
            });
        }

    })
})

//create the relation order_product table 
*/

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");

    connection.query("drop  table IF EXISTS order_product", (err, result) => {
        if (err) { console.log(err) }
        else {
            var sql = `CREATE TABLE order_product ( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,product_id INT UNSIGNED,order_id INT UNSIGNED, FOREIGN KEY (product_id) REFERENCES products(id)  , FOREIGN KEY (order_id) REFERENCES orders(id) ); `
            connection.query(sql, function (err, result) {
                if (err) { console.log(err); }
                else connection.end();
            });
        }

    })
})
