const ProductCard = ({
	imgUrl,
	productTitle,
	productPrice,
	addToCart,
	cartItems,
}) => {
	const printCart = () => {
		console.log(cartItems);
	};
	return (
		<>
			<div>
				<img
					src={imgUrl}
					style={{ width: "150px", height: "auto" }}
				></img>
				<h3>{productTitle}</h3>
				<p>${productPrice}</p>
				<button onClick={addToCart}>Add to Cart</button>
				<button onClick={printCart}>Print Cart State</button>
			</div>
		</>
	);
};

export default ProductCard;
