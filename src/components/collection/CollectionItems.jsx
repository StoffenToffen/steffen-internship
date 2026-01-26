import { useEffect, useState } from "react";

import Item from "../ui/Item";

export default function CollectionItems({ collection: { items } }) {
	const [itemsToShow, setItemsToShow] = useState(12);
	const [sortValue, setSortValue] = useState("DEFAULT");
	const [sortedItems, setSortedItems] = useState();

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
					{sortedItems?.slice(0, itemsToShow).map((item) => (
						<div key={item.itemId} className="item-column">
							<Item item={item} />
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
