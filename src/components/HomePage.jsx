import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<header>Welcome To Project Shop</header>
			<Link to="mainlayout">
				<button>Enter Shop</button>
			</Link>
		</>
	);
};

export default HomePage;
