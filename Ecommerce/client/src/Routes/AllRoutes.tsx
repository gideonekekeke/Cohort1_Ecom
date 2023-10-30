import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../Layout/WebLayout";
import HomePage from "../Pages/HomePage";
import ShopPage from "../Pages/ShopPage";
import SignInPage from "../Pages/SignInPage";
import MerchantCard from "../Components/MerchantCard";
import AgentMerchant from "../Components/AgentMerchant";
import Register from "../Pages/Register";
import DetailedPage from "../Pages/DetailedPage";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <WebLayout />,

		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/shoppage",
				element: <ShopPage />,
			},

			{
				path: "/product/:id",
				element: <DetailedPage />,
			},

			{
				path: "/merchantcard",
				element: <MerchantCard />,
			},
			{
				path: "/agent",
				element: <AgentMerchant />,
			},
		],
	},
	{
		path: "/signin",
		element: <SignInPage />,
	},

	{
		path: "/register",
		element: <Register />,
	},
]);

export default Index;
