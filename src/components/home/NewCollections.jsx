import axios from "axios";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Collection from "../ui/Collection";
import CollectionsSkeleton from "../ui/CollectionsSkeleton";

export default function NewCollections({ swiperSettings }) {
	const [newCollections, setNewCollections] = useState();

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				"https://remote-internship-api-production.up.railway.app/newCollections",
			);
			setNewCollections(data.data);
		})();
	}, []);

	return (
		<section id="new-collections">
			<div className="container">
				<div className="row">
					<h2 className="new-collections__title">New Collections</h2>
					<div className="new-collections__body">
						<Swiper {...swiperSettings} modules={[Navigation]}>
							{newCollections
								? newCollections.map((newCollection) => (
										<SwiperSlide
											className="collection-column"
											key={newCollection.collectionId}
										>
											<Collection data={newCollection} />
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
