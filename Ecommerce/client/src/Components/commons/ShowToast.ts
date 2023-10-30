import { toast } from "react-toastify";

const ShowToast = (success: boolean, message: string) => {
	if (success) {
		toast.success(message, {
			autoClose: 3000,
		});
	} else  {
		toast.error(message, {
			autoClose: 3000,
		});
	}
};

export default ShowToast;
