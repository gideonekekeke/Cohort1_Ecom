import express,{Request,Response} from "express"
import UserAuth from "../Model/UserModel"
import ProfileModel from "../Model/ProfileModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const UserReg = async(req:Request, res:Response):Promise<Response>=>{
    try
    {
        const{FullName,Email,Password} = req.body
        if(!FullName || !Email || !Password)
        {
          return res.status(401).json({
            success:0,
            message:"all field required"
          })
        }
        const CheckEmail = await UserAuth.findOne({Email:Email})
        if(CheckEmail)
        {
           return res.status(401).json({
            message:"email already exist"
           })
        }
        const Salt = await bcrypt.genSalt(10)
        const HashPassword = await bcrypt.hash(Password,Salt)

        const CreateUser = await UserAuth.create({
            FullName,
            Email,
            Password:HashPassword
        })
        const createProfile = await ProfileModel.create({
            _id:CreateUser._id,
            FirstName:"",
            LastName:"",
            gender:"",
            avatar:"",
            DateofBirth:""

        })
        CreateUser.Profile = createProfile._id
        CreateUser.save()

        return res.status(201).json({
            success:1,
            message:"registration successful",
            result:CreateUser
        })
    }catch(error:any)
    {
      return res.status(400).json({
        message:error.message
      })
    }
}

export const getSingleuser = async(req:Request, res:Response):Promise<Response>=>{
    try
    {
        const getOneuser = await UserAuth.findById(req.params.id).populate(
            {
                path:"Profile",
                 select:"FirstName LastName DateofBirth"
            }
        )

        return res.status(201).json({
            message:"successfully gotten",
            data:getOneuser
        })

    }catch(error:any)
    {
       return res.status(400).json({
        message:"failed to get user",
        error:error.message
       })
    }

}

export const LogInUser = async(req:Request, res:Response):Promise<Response>=>{

    try{

        const {Email, Password} = req.body
        if(!Email || !Password)
        {
            return res.status(400).json({
                message:"pls enter all field"
            })
        }
        const Checkemail = await UserAuth.findOne({Email:Email})
        if(Checkemail)
        {
          const checkPass = await bcrypt.compare(Password, Checkemail.Password)
          if(checkPass)
          {
             const token = jwt.sign(
                {
                    _id:Checkemail._id, FullName:Checkemail.FullName,
                },
                "wertyuiopkjhgfdsa",
                {
                    expiresIn:"20m"
                },
            
             ) 
             const{Password,...info}= Checkemail._doc
             const option:any= {expiresIn:"10m"}
             res.cookie("sessionId", token,option)
             return res.status(201).json({
                success:1,
                message:"login successful",
                result:{info,token}
             })
          }else
          {
            return res.status(400).json({
                message:"incorrect password"
            })
          }
        }else
        {
            return res.status(400).json({
                message:"user not found"
            })
        }
        
    }catch(error:any)
    {
       return res.status(400).json({
        message:error.message
       })
    }
}

export const GetAllUser = async(req:Request, res:Response):Promise<Response>=>{
    try
    {
        const AllUsers = await UserAuth.find()
        return res.status(200).json({
            message:"all users found",
            result:AllUsers
        })

    }catch(error:any)
    {
        return res.status(400).json({
            massage:"users not found",
            error:error.message
        })
    }
}

