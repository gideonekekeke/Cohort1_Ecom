import express,{Request} from "express"
import multer from "multer"
import path from "path"

type DestinationCallbck = (error:Error | null, destination:string)=> void;
type FileNameCallback = (error:Error | null, filename:string)=> void;

const storage = multer.diskStorage({
    destination:function(req:Request, file:any, cb:DestinationCallbck){
        cb(null, path.join(__dirname, "../Uploads"))
    },
    filename:function(req:Request, file:any, cb:FileNameCallback){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + uniqueSuffix + "-" + path.extname(file.originalname))
    }

})
 export const upload = multer({storage:storage}).single("avatar")


 
type DestinationCallbcks = (error:Error | null, destination:string)=> void;
type FileNameCallbacks = (error:Error | null, filename:string)=> void;

const Productstorage = multer.diskStorage({
    destination:function(req:Request, file:any, cb:DestinationCallbcks){
        cb(null, path.join(__dirname, "../Uploads"))
    },
    filename:function(req:Request, file:any, cb:FileNameCallbacks){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        cb(null, file.fieldname + uniqueSuffix + "-" + path.extname(file.originalname))
    }

})
 export const uploaded = multer({storage:Productstorage}).single("Image")

