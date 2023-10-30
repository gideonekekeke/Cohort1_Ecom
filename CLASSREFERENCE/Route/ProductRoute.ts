import express, { Router } from "express";
import {
	CreateProduct,
	ProductImage,
	ViewAllProduct,
    ViewSingleProduct,
} from "../Controller/ProductController";
import { uploaded } from "../Utils/multer";

const router = express.Router();

router.route("/create-product/:userId/:catId").post(uploaded, CreateProduct);
router.route("/edit-image/:id").put(uploaded, ProductImage);
router.route("/all-product").get(ViewAllProduct);
router.route("/product/:id").get(ViewSingleProduct);

export default router;
