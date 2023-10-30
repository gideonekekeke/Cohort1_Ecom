import mongoose from "mongoose";

interface CategoryAuth{
    Name:string,
    slug:string,
    parent:string,
    user:{},
    product:{}[]
}

interface iCategoryAuth extends CategoryAuth,mongoose.Document{}

const CategorySchema = new mongoose.Schema({
    Name:
    {
        type:String
    },
    slug:
    {
        type:String
    },
    parent:{
        type:String
    },
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    products:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }]

},
{timestamps:true}

)

export default mongoose.model<iCategoryAuth>("categories", CategorySchema)