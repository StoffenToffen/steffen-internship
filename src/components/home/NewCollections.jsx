import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import CollectionsSkeleton from "../ui/CollectionsSkeleton";

export default function NewCollections({ swiperSettings }) {
	const [newCollections, setNewCollections] = useState();

	useEffect(() => {
		(async () => {
			const data = await axios.get(
				"https://remote-internship-api-production.up.railway.app/newCollections",
			);
			setNewCollections(data.data.data);
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
								? newCollections.map(
										({
											floor,
											title,
											imageLink,
											totalVolume,
											collectionId,
										}) => (
											<SwiperSlide
												className="collection-column"
												key={collectionId}
											>
												<Link
													to={`/collection/${collectionId}`}
													className="collection"
												>
													<img
														src={imageLink}
														alt={title}
														className="collection__img"
													/>
													<div className="collection__info">
														<h3 className="collection__name">{title}</h3>
														<div className="collection__stats">
															<div className="collection__stat">
																<span className="collection__stat__label">
																	Floor
																</span>
																<span className="collection__stat__data">
																	{parseFloat(floor).toFixed(2)} ETH
																</span>
															</div>
															<div className="collection__stat">
																<span className="collection__stat__label">
																	Total Volume
																</span>
																<span className="collection__stat__data">
																	{totalVolume} ETH
																</span>
															</div>
														</div>
													</div>
												</Link>
											</SwiperSlide>
										),
									)
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
