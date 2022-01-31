import { Router } from "express";
import {
    getProducts,
    createNewProduct,
    getProductById,
    deleteProductById,
    getTotalProducts,
    updateProductById,
    getInventarioProductos,
    getCatProductos,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

router.get("/InventoryProducts", getInventarioProductos);

router.get("/CatProducts", getCatProductos);

export default router;