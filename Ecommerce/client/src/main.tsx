import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Index from "./Routes/AllRoutes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { Store } from "./services/Store.tsx";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={Store}>
			<PersistGate loading={null} persistor={persistor}>
				<ToastContainer />
				<RouterProvider router={Index} />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
