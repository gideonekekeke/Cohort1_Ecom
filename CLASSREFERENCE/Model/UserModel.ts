import mongoose from "mongoose";

interface UserAuth{
    FullName:string,
    Email:string,
    Password:string,
    Profile:{}
}

interface iUserAuth extends UserAuth,mongoose.Document{}

const UserSchema = new mongoose.Schema({
    FullName:
    {
        type:String,
        required:true
    },
    Email:
    {
        type:String,
        unique:true
    },
    Password:
    {
        type:String,
        required:true
    },
    

    Profile:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"profiles"
    },

    
} ,{timestamps:true})
export default mongoose.model<iUserAuth>("users", UserSchema)