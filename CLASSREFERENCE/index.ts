import express, { Application } from "express"
import "./Database/database"
import { mainApp } from "./MainApp"



const port:Number = 3800
const app:Application = express()
mainApp(app)


const server = app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

process.on("uncaughtException", (error:Error)=> {
    console.log("stop here:uncaughtexception error")
    process.exit(1)
})

process.on("unhandledRejection", (reason:any)=>{
    console.log("an unhandled rejection error",reason)
    server.close(()=>{
        process.exit(1)
    })
})