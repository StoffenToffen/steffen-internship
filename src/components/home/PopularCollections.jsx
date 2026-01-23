import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Collection from "../ui/Collection";
import CollectionsSkeleton from "../ui/CollectionsSkeleton";

export default function PopularCollections({ swiperSettings }) {
	const [popularCollections, setPopularCollections] = useState();

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				"https://remote-internship-api-production.up.railway.app/popularCollections",
			);
			setPopularCollections(data.data);
		})();
	}, []);

	return (
		<section id="popular-collections">
			<div className="container">
				<div className="row">
					<h2 className="popular-collections__title">Popular Collections</h2>
					<div className="popular-collections__body">
						<Swiper {...swiperSettings} modules={[Navigation]}>
							{popularCollections
								? popularCollections.map((popularCollection) => (
										<SwiperSlide
											className="collection-column"
											key={popularCollection.collectionId}
										>
											<Collection data={popularCollection} />
										</SwiperSlide>
									))
								: new Array(9).fill(0).map((_, index) => (
										<SwiperSlide key={index} className="collection-column">
											<CollectionsSkeleton />
										</SwiperSlide>
									))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}
