import express, { Request, Response } from "express";
import ProductAuth from "../Model/ProductModel";
import UserAuth from "../Model/UserModel";
import CategoryAuth from "../Model/CategoryModel";
import mongoose from "mongoose";
import cloudinary from "../Utils/cloudinary";
import path from "path";

export const CreateProduct = async (
	req: any,
	res: Response,
): Promise<Response> => {
	try {
		const { Name, Desc, Quantity, Price, Category } = req.body;
		// if(!Name || !Desc || !Quantity || !Price || !Category)
		// {
		//     return res.status(401).json({
		//         message:"all field required"
		//     })

		// }
		const { catId } = req.params;
		console.log(catId);
		const getCat: any = await CategoryAuth.findOne({ _id: catId });
		console.log(getCat);

		const { userId } = req.params;
		console.log(userId);
		const getUser = await UserAuth.findOne({ _id: userId });
		console.log(getUser);

		const dataProduct: any = await ProductAuth.create({
			Name,
			Desc,
			Quantity,
			Price,
			Category,
			Image: (await cloudinary.uploader.upload(req.file?.path)).secure_url,
		});
		getCat.products.push(new mongoose.Types.ObjectId(dataProduct._id));
		getCat.save();

		dataProduct.CreatedBy = getUser;
		dataProduct.save();

		return res.status(201).json({
			message: "created sucessfuly",
			result: dataProduct,
		});
	} catch (error: any) {
		return res.status(400).json({
			message: "failed to create product",
			error: error.message,
		});
	}
};

export const ProductImage = async (
	req: any,
	res: Response,
): Promise<Response> => {
	try {
		const { id } = req.params;
		console.log(req.file);
		const imageUrl = await cloudinary.uploader.upload(req.file.path);
		console.log("the result", imageUrl);
		const updateImage = await ProductAuth.findByIdAndUpdate(
			id,
			{
				avatar: imageUrl.secure_url,
			},
			{ new: true },
		);
		return res.status(201).json({
			message: "image successfuly updated",
			result: updateImage,
		});
	} catch (error: any) {
		return res.status(400).json({
			message: error.messge,
		});
	}
};

export const ViewAllProduct = async (req: Request, res: Response) => {
	try {
		const fetchProduct = await ProductAuth.find();
		return res.status(200).json({
			message: "successfull",
			data: fetchProduct,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};



export const ViewSingleProduct = async (req: Request, res: Response) => {
	try {
		const fetchProduct = await ProductAuth.findById(req.params.id);
		return res.status(200).json({
			message: "successfull",
			data: fetchProduct,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};

