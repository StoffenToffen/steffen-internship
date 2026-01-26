import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";

function App() {
	const swiperSettings = {
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		navigation: true,
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1600: {
				slidesPerView: 6,
			},
		},
	};

	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage swiperSettings={swiperSettings} />} />
				<Route path="/collections" element={<CollectionsPage />} />
				<Route path="/collection/:collectionId" element={<CollectionPage />} />
				<Route path="/item/:itemId" element={<ItemPage swiperSettings={swiperSettings} />} />
				<Route path="/user/:creatorId" element={<UserPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
