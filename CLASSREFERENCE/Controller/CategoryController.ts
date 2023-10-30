import express,{Request, Response} from "express"
import UserAuth from "../Model/UserModel"
import ProfileAuth from "../Model/ProfileModel"
import CategoryAuth from "../Model/CategoryModel"
import cloudinary from "../Utils/cloudinary"
import slugify from "slugify"

function generateCategoryId() {
    const characters = "ABCDEFGHIJKLMNOPRSTUabcdefghijklmnop";
    const length = 6;
    let randomId = ""
    for(let i = 0; i < length; i++)
    {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return randomId
}

export const CreateCat = async(req:Request, res:Response):Promise<Response>=>{
    try
    {
       const{Name, parent} =req.body
       if(!Name)
       {
          return res.status(401).json({
            success:0,
            message:"name cant be empty"
          })
       }
       const{userId}= req.params
       console.log(userId)
       const getUser = await UserAuth.findOne({_id:userId})
       console.log(getUser)
       
       const dataCat:any = await CategoryAuth.create({
        Name,
        parent,
        slug:`${slugify(Name)}-${generateCategoryId()}`
       })

       dataCat.users = getUser
       dataCat.save()

       return res.status(201).json({
        message:dataCat
       })
    }catch(error:any)
    {
       return res.status(400).json({
        message:error.message
       })
    }
}

export const GetAllCategory = async(req:Request, res:Response):Promise<Response>=>{
    try{
        const getAll = await CategoryAuth.find().populate({
            path:"users",
            select:"Email FullName"


        })
        return res.status(200).json({
            message:"all category",
            result:getAll
        })

    }catch(error:any)
    {
       return res.status(400).json({
        message:error.message
       })
    }
}

export const GetSingle = async(req:Request, res:Response):Promise<Response>=>{
        try
        {
            const{id}=req.params
            const getOne = await CategoryAuth.findById(id)
            return res.status(200).json({
                success:1,
                message:"single category gotten",
                result:getOne
            })

        }catch(error:any)
        {
            return res.status(400).json({
                message:error.message
            })
        }
}

export const DeleteCategory = async(req:Request, res:Response):Promise<Response>=>{
    try
    {
        const{id} = req.params
      const deleteOne = await CategoryAuth.findByIdAndDelete(id)
      return res.status(200).json({
        message:"category deleted successfully"
      })
    }catch(error:any)
    {
        return res.status(400).json({
            message:error.message
        })
    }
}
