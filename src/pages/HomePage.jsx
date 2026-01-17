import React, { useEffect } from "react";
import NewCollections from "../components/home/NewCollections.jsx";
import PopularCollections from "../components/home/PopularCollections.jsx";
import SelectedCollection from "../components/home/SelectedCollection.jsx";
import Trending from "../components/home/Trending.jsx";

export default function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SelectedCollection />
			<Trending />
			<NewCollections />
			<PopularCollections />
		</>
	);
}
