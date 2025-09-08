import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

const ShopPage = () => {
	/* cartItems passed for testing to be removed */
	const { products, cartItems, setCartItems } = useOutletContext();

	const handleAddToCart = (product) => {
		setCartItems((prevCart) => {
			const itemExist = prevCart.find((item) => item.id === product.id);

			if (itemExist) {
				return prevCart.map((item) =>
					item.id === product.id
						? {
								...item,
								quantity: item.quantity + 1,
						  }
						: item
				);
			} else {
				return [
					...prevCart,
					{
						...product,
						quantity: 1,
					},
				];
			}
		});
	};

	return (
		<>
			<header>Shop Page</header>
			{products.map((p) => (
				<ProductCard
					/* cartItems passed for testing to be removed */
					cartItems={cartItems}
					key={p.id}
					imgUrl={p.image}
					productTitle={p.title}
					productPrice={p.price}
					addToCart={() => handleAddToCart(p)}
				/>
			))}
		</>
	);
};

export default ShopPage;
