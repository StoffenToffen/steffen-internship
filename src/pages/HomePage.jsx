import { useEffect } from "react";

import NewCollections from "../components/home/NewCollections.jsx";
import PopularCollections from "../components/home/PopularCollections.jsx";
import SelectedCollection from "../components/home/SelectedCollection.jsx";
import Trending from "../components/home/Trending.jsx";

export default function HomePage() {
	const swiperSettingsCollections = {
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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SelectedCollection />
			<Trending />
			<NewCollections swiperSettings={swiperSettingsCollections} />
			<PopularCollections swiperSettings={swiperSettingsCollections} />
		</>
	);
}
