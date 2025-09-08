const ProductCard = ({ imgUrl, productTitle, productPrice, addToCart }) => {
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
			</div>
		</>
	);
};

export default ProductCard;
