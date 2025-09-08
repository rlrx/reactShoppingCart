const CartItemCard = ({ imgUrl, productTitle, productPrice, quantity }) => {
	return (
		<>
			<div>
				<img
					src={imgUrl}
					style={{ width: "150px", height: "auto" }}
				></img>
				<h3>{productTitle}</h3>
				<p>${productPrice}</p>
				<input type="number"></input>
				<button>Delete</button>
			</div>
		</>
	);
};

export default CartItemCard;
