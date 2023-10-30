import mongoose from "mongoose";

interface ProfileAuth{
    FirstName:string,
    LastName:string,
    DateofBirth:string,
    gender:string,
    avatar:string
}
interface iProfileAuth extends ProfileAuth,mongoose.Document{}

const ProfileSchema = new mongoose.Schema({
    FirstName:
    {
        type:String
    },
    LastName:
    {
        type:String
    },
    DateofBirth:
    {
        type:String
    },
    gender:
    {
        type:String
    },
    avatar:
    {
        type:String
    },
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
}, {timestamps:true})

export default mongoose.model<iProfileAuth>("profiles", ProfileSchema)