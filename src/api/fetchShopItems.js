const fetchData = () => {
	fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			return json;
		});
};

export default fetchData;
