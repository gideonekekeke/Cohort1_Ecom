import express,{Router} from "express"
import { EditProfile ,EditImage} from "../Controller/ProfileController"
import {upload} from "../Utils/multer"

const router = express.Router()
router.route("/profile-edit/:id").put(EditProfile)
router.route("/image-edit/:Imgid").put(upload,EditImage)

export default router