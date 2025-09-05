import CartItemCard from "./CartItemCard";
import { Link } from "react-router-dom";
const CartPage = () => {
	return (
		<>
			<Link to="/shop">
				<button>Back to Shop</button>
			</Link>
			<h2>Cart</h2>
			<CartItemCard></CartItemCard>
			<button>Checkout</button>
		</>
	);
};

export default CartPage;
