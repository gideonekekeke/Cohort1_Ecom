import express, {Router} from "express"
import { UserReg,getSingleuser,GetAllUser,LogInUser} from "../Controller/UserController"



const router = express.Router()

router.route("/create-user").post(UserReg)
router.route("/single-user/:id").get(getSingleuser)
router.route("/all-user").get(GetAllUser)
router.route("/login-user").post(LogInUser)


export default router