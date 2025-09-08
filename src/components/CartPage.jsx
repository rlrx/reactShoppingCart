import CartItemCard from "./CartItemCard";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
	const { products, cartItems, setCartItems } = useOutletContext();

	return (
		<>
			<Link to="/shop">
				<button>Back to Shop</button>
			</Link>
			<h2>Cart</h2>
			{cartItems.map((item) => (
				<CartItemCard
					key={item.id}
					imgUrl={item.image}
					productTitle={item.title}
					productPrice={item.price}
					quantity={item.quantity}
				/>
			))}
			<button>Checkout</button>
		</>
	);
};

export default CartPage;
