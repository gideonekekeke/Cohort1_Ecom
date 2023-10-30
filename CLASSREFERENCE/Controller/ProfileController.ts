import express ,{Request,Response}from "express"
import ProfileAuth from "../Model/ProfileModel"
import cloudinary from "../Utils/cloudinary"

export const EditProfile = async(req:Request, res:Response):Promise<Response>=>{
    try
    {
        const{FirstName, LastName, DateofBirth,gender} =req.body
        const {id} = req.params
        const getUpdate = await ProfileAuth.findByIdAndUpdate(id,
            {
                FirstName,
                LastName,
                gender,
                DateofBirth
            },

            {
                new:true
            }
            )
            return res.status(201).json({
                message:"updated successfully",
                data:getUpdate
            })

    }catch(error:any)
    {
       return res.status(400).json({
        message:error.message
       })
    }
}


export const EditImage = async(req:any, res:Response):Promise<Response>=>{
    try
    {
      const {Imgid} = req.params
      console.log(req.file)
      const imageUrl = await cloudinary.uploader.upload(req.file.path)
      console.log("the result",imageUrl)
      const updateImage = await ProfileAuth.findByIdAndUpdate(Imgid,
        {
            avatar:imageUrl.secure_url

        },
        {new:true}
        )
        return res.status(201).json({
            message:"image successfuly updated",
            result:updateImage
        })
    }catch(error:any)
    {
        return res.status(400).json({
            message:error.messge
        })
    }
}