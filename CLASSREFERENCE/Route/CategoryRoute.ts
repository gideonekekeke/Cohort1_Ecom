import express ,{Router}from "express"
import { CreateCat,GetAllCategory,DeleteCategory,GetSingle } from "../Controller/CategoryController"


const router = express.Router()
router.route("/create-cat/:userId").post(CreateCat)
router.route("/get-all").get(GetAllCategory)
router.route("/delete/:id").delete(DeleteCategory)
router.route("/single/:id").get(GetSingle)

export default router