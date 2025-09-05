import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

const ShopPage = () => {
	const { products, cartItems, setCartItems } = useOutletContext();
	return (
		<>
			<header>Shop Page</header>
			{products.map((p) => (
				<ProductCard
					cartItems={cartItems}
					key={p.id}
					imgUrl={p.image}
					productTitle={p.title}
					productPrice={p.price}
					addToCart={() =>
						setCartItems((prevCart) => [
							...prevCart,
							{
								id: p.id,
								imgUrl: p.image,
								productTitle: p.title,
								productPrice: p.price,
							},
						])
					}
				/>
			))}
		</>
	);
};

export default ShopPage;
