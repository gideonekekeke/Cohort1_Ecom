import mongoose from "mongoose";

interface ProductAuth{
    Name:string,
    Image:string,
    Desc:string,
    Quantity:number,
    Price:Number,
    Category:string,
    CreatedBy:{}
}

interface iProductAuth extends ProductAuth,mongoose.Document{}

const ProductSchema = new mongoose.Schema({
    Name:
    {
        type:String
    },
    Image:
    {
        type:String,

    },
    Desc:
    {
        type:String
    },
    Quantity:
    {
        type:Number
    },
    Category:
    {
        type:String
    },
    Price:
    {
        type:Number
    },
    CreatedBy:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},
{timestamps:true}
)

export default mongoose.model<iProductAuth>("products", ProductSchema)