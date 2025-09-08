import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const MainLayout = () => {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
			});
	}, []);

	return (
		<>
			<NavBar></NavBar>
			<Outlet context={{ products, cartItems, setCartItems }} />
		</>
	);
};

export default MainLayout;
