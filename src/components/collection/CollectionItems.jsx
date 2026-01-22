import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

import CollectionsSkeleton from "../ui/CollectionsSkeleton";

export default function CollectionItems({ collection }) {
	const [itemsToShow, setItemsToShow] = useState(12);
	const { items } = collection || {};

	return (
		<section id="collection-items">
			<div className="row collection-items__row">
				<div className="collection-items__header">
					<div className="collection-items__header__left">
						<span className="collection-items__header__live">
							<div className="green-pulse"></div>
							Live
						</span>
						<span className="collection-items__header__results">
							{items?.length} results
						</span>
					</div>
					<select className="collection-items__header__sort">
						<option value="" default>
							Default
						</option>
						<option value="">Price high to low</option>
						<option value="">Price low to high</option>
					</select>
				</div>
				<div className="collection-items__body">
					{items
						? items
								.slice(0, itemsToShow)
								.map(({ itemId, price, lastSale, title, imageLink }) => (
									<div key={itemId} className="item-column">
										<Link to={`/item/${itemId}`} className="item">
											<figure className="item__img__wrapper">
												<img
													src={imageLink}
													alt={title}
													className="item__img"
												/>
											</figure>
											<div className="item__details">
												<span className="item__details__name">{title}</span>
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
									</div>
								))
						: new Array(12).fill(0).map((_, index) => (
								<div key={index} className="collection-column">
									<CollectionsSkeleton />
								</div>
							))}
				</div>
			</div>
			{itemsToShow < items?.length && (
				<button
					type="button"
					className="collection-page__button"
					onClick={() => {
						setItemsToShow(itemsToShow + 6);
					}}
				>
					Load more
				</button>
			)}
		</section>
	);
}
