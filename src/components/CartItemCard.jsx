const CartItemCard = ({
	id,
	imgUrl,
	productTitle,
	productPrice,
	quantity,
	removeFromCart,
	setCartItems,
}) => {
	const updateQuantity = (id, quantity) => {
		setCartItems((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, quantity: Number(quantity) } : item
			)
		);
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
				<input
					type="number"
					value={quantity}
					onChange={(e) => updateQuantity(id, e.target.value)}
				></input>
				<button onClick={removeFromCart}>Delete</button>
			</div>
		</>
	);
};

export default CartItemCard;
