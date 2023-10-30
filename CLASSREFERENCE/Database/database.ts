import mongoose from "mongoose";

const onLineUrl="mongodb+srv://edemahd:iy2A64oLkF3qU7s2@cluster0.pw3yjp0.mongodb.net/?retryWrites=true&w=majority"
const Url:string = "mongodb://0.0.0.0:27017/ClassRef"

mongoose.connect(Url).then(()=>{
    console.log("database connected successfully")
})
.catch((error:any)=>{
    console.log("an error occurred")
})

export  default mongoose