import ShowToast from "../Components/commons/ShowToast";
import Instance from "./AxiosConfig";

interface IUser {
	FullName: string;
	Email: string;
	Password: string;
}

interface ILoginUser {
	Email: string;
	Password: string;
}

export const RegisterUser = async (data: IUser) => {
	try {
		const response = await Instance.post("/create-user", data);
		if (response.status === 201) {
			ShowToast(true, `${response.data.message}`);
		}
		// console.log(response);
		return response;
	} catch (err) {
		console.log(err);
		ShowToast(false, `${err.response.data.message}`);
	}
};

export const LoginUser = async (data: ILoginUser) => {
	try {
		const response = await Instance.post("/login-user", data);
		if (response.status === 201) {
			ShowToast(
				true,
				`${response.data.message}
`,
			);
		}

		return response;
	} catch (err) {
		console.log(err);
		ShowToast(false, `${err.response.data.message}`);
	}
};

export const ViewSingleUser = async (id:string) => {
	try {
		const response = await Instance.get(`single-user/${id}`);
		//  console.log();
		return response;
	} catch (err) {
		console.log(err);
		// ShowToast(false, `${err.response.data.message}`);
	}
};



export const ViewAllProducts = async () => {
	try {
		const response = await Instance.get(`all-product`);
		//  console.log();
		return response;
	} catch (err) {
		console.log(err);
		// ShowToast(false, `${err.response.data.message}`);
	}
};


export const ViewSingleProducts = async (id:string) => {
	try {
		const response = await Instance.get(`product/${id}`);
		//  console.log();
		return response;
	} catch (err) {
		console.log(err);
		// ShowToast(false, `${err.response.data.message}`);
	}
};

