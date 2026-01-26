import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Item from "../ui/Item";

export default function RecommendedItems({
	excludeItemId,
	collection,
	collectionId,
	swiperSettings,
}) {
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
								{collection.items
									.filter((item) => item.itemId !== excludeItemId)
									.map((item) => (
										<SwiperSlide key={item.itemId} className="item-column">
											<Item item={item} />
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
