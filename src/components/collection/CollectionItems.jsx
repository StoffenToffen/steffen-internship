import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CollectionItems({ collection }) {
	const [itemsToShow, setItemsToShow] = useState(12);
	const [sortValue, setSortValue] = useState("DEFAULT");
	const [sortedItems, setSortedItems] = useState();
	const { items } = collection;

	useEffect(() => {
		setSortedItems(
			items
				.slice()
				.sort((a, b) =>
					sortValue === "HIGH_TO_LOW"
						? b.price - a.price
						: sortValue === "LOW_TO_HIGH"
							? a.price - b.price
							: a - b,
				),
		);
	}, [sortValue, items]);

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
							{items.length} results
						</span>
					</div>
					<select
						className="collection-items__header__sort"
						value={sortValue}
						onChange={(event) => setSortValue(event.target.value)}
					>
						<option value="DEFAULT" default>
							Default
						</option>
						<option value="HIGH_TO_LOW">Price high to low</option>
						<option value="LOW_TO_HIGH">Price low to high</option>
					</select>
				</div>
				<div className="collection-items__body">
					{sortedItems
						?.slice(0, itemsToShow)
						.map(({ itemId, price, lastSale, title, imageLink }) => (
							<div key={itemId} className="item-column">
								<Link to={`/item/${itemId}`} className="item">
									<figure className="item__img__wrapper">
										<img src={imageLink} alt={title} className="item__img" />
									</figure>
									<div className="item__details">
										<span className="item__details__name">{title}</span>
										<span className="item__details__price">{price} ETH</span>
										<span className="item__details__last-sale">
											Last sale: {lastSale} ETH
										</span>
									</div>
									<div className="item__see-more">
										<button type="button" className="item__see-more__button">
											See More
										</button>
										<div className="item__see-more__icon">
											<FontAwesomeIcon icon={faShoppingBag} />
										</div>
									</div>
								</Link>
							</div>
						))}
				</div>
			</div>
			{itemsToShow < items.length && (
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
