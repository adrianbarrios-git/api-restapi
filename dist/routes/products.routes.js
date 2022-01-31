"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)();
router.get("/products", _products.getProducts);
router.post("/products", _products.createNewProduct);
router.get("/products/count", _products.getTotalProducts);
router.get("/products/:id", _products.getProductById);
router["delete"]("/products/:id", _products.deleteProductById);
router.put("/products/:id", _products.updateProductById);
router.get("/InventoryProducts", _products.getInventarioProductos);
router.get("/CatProducts", _products.getCatProductos);
var _default = router;
exports["default"] = _default;