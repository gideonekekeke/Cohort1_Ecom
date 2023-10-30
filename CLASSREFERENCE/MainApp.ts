import express,{Application} from "express"
import cors from "cors"
import UserRoute from "./Route/UserRoute"
import ProfileRoute from "./Route/ProfileRoute"
import CategoryRoute from "./Route/CategoryRoute"
import ProductRoute from "./Route/ProductRoute"

export const mainApp = (app:Application)=>{
    app.use(express.json()).use(cors())
    .use("/api/v1",UserRoute)
    .use("/api/v1",ProfileRoute)
    .use("/api/v1", CategoryRoute)
    .use("/api/v1",ProductRoute)
    .get("/api", (req:any, res:any)=>{
        res.status(200).json({
            message:"api is running"
        })
    })


}