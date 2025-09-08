import CartItemCard from "./CartItemCard";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
	const { products, cartItems, setCartItems } = useOutletContext();

	const handleRemoveFromCart = (product) => {
		setCartItems((prevCart) =>
			prevCart.filter((item) => item.id !== product.id)
		);
	};

	const calculateTotal = () => {
		let totalSum = 0;
		cartItems.map((item) => {
			let itemSum = item.quantity * item.price;
			totalSum += itemSum;
		});
		return totalSum.toFixed(2);
	};

	return (
		<>
			<Link to="/shop">
				<button>Back to Shop</button>
			</Link>
			<h2>Cart</h2>
			{cartItems.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				cartItems.map((item) => (
					<CartItemCard
						key={item.id}
						id={item.id}
						imgUrl={item.image}
						productTitle={item.title}
						productPrice={item.price}
						quantity={item.quantity}
						removeFromCart={() => handleRemoveFromCart(item)}
						setCartItems={setCartItems}
					/>
				))
			)}

			<button>Checkout ${calculateTotal()}</button>
		</>
	);
};

export default CartPage;
