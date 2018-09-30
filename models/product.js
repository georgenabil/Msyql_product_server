var db = require('../db/connection.js');

module.exports = class ProdModel {

    static getProds(callback) {
        return db.query("SELECT * FROM products ", callback);
    }

    static getProdID(id, callback) {
        return db.query("SELECT * FROM products WHERE id=?", [id], callback);
    }

    static addProd(product, callback) {

        return db.query("INSERT INTO products (DVD_player, price) VALUES(?,?)",
            [product.DVD_player, product.price], callback);
    }

    static delProd(id, callback) {
        return db.query("DELETE FROM products WHERE id=?", [id], callback);
    }

    static editProd(product, callback) {
        return db.query("UPDATE products SET DVD_player=?, price=? WHERE  id=?",
            [product.DVD_player, product.detalhes, product.id], callback);
    }
    static getProductbyuser(username, callback) {

        return db.query("select  P.DVD_player from orders O, products P, order_product OP where O.id = OP.order_id and P.id = OP.product_id", [])
    }

};