import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import ShopPage from "./components/ShopPage.jsx";
import CartPage from "./components/CartPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "shop",
		element: <MainLayout />,
		children: [
			{ index: true, element: <ShopPage /> },
			{ path: "cart", element: <CartPage /> },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
);
