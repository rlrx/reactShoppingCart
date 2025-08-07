import ShopPage from "./ShopPage";
import { useState } from "react";
import CartPage from "./CartPage";
import { Link } from "react-router-dom";

const MainLayout = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);

	function toggleCart() {
		if (cartIsOpen) {
			setCartIsOpen(false);
		} else setCartIsOpen(true);
	}

	return (
		<>
			<h1>Project Shop</h1>
			<ShopPage></ShopPage>
			<button onClick={toggleCart}>Cart</button>
			{cartIsOpen ? <CartPage /> : <></>}
			<Link to="/">
				<button>Home</button>
			</Link>
		</>
	);
};

export default MainLayout;
