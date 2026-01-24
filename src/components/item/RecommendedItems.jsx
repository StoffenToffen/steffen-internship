import { faShoppingBag, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CollectionsSkeleton from "../ui/CollectionsSkeleton";

export default function RecommendedItems({
	excludeItemId,
	collectionId,
	swiperSettings,
}) {
	const [collection, setCollection] = useState();

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				collectionId &&
					`https://remote-internship-api-production.up.railway.app/collection/${collectionId}`,
			);
			setCollection(data.data);
		})();
	}, [collectionId]);

	return (
		<section id="recommended-items">
			<div className="container">
				<div className="row recommended-items__row">
					<div className="recommended-items__wrapper">
						<div className="recommended-items__header">
							<FontAwesomeIcon icon={faTableCells} />
							<h3 className="recommended-items__header__title">
								More from this collection
							</h3>
						</div>
						<div className="recommended-items__body">
							<Swiper {...swiperSettings} modules={[Navigation]}>
								{collection
									? collection.items
											.filter((item) => item.itemId !== excludeItemId)
											.map(({ itemId, price, lastSale, title, imageLink }) => (
												<SwiperSlide key={itemId} className="item-column">
													<Link to={`/item/${itemId}`} className="item">
														<figure className="item__img__wrapper">
															<img
																src={imageLink}
																alt={title}
																className="item__img"
															/>
														</figure>
														<div className="item__details">
															<span className="item__details__name">
																{title}
															</span>
															<span className="item__details__price">
																{price} ETH
															</span>
															<span className="item__details__last-sale">
																Last sale: {lastSale} ETH
															</span>
														</div>
														<div className="item__see-more">
															<button
																type="button"
																className="item__see-more__button"
															>
																See More
															</button>
															<div className="item__see-more__icon">
																<FontAwesomeIcon icon={faShoppingBag} />
															</div>
														</div>
													</Link>
												</SwiperSlide>
											))
									: new Array(9).fill(0).map((_, index) => (
											<SwiperSlide key={index} className="collection-column">
												<CollectionsSkeleton />
											</SwiperSlide>
										))}
							</Swiper>
						</div>
						<div className="recommended-items__footer">
							<Link
								to={`/collection/${collectionId}`}
								className="recommended-items__footer__button"
							>
								View Collection
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
