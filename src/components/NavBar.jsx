import { Link } from "react-router-dom";
const NavBar = ({ cartItems }) => {
	return (
		<>
			<h1>Project Shop</h1>
			<Link to="/">
				<button>Home</button>
			</Link>
			<Link to="/shop/cart">
				<button>Shopping Cart</button>
			</Link>
			<span>{cartItems.length} items in cart!</span>
		</>
	);
};

export default NavBar;
