import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/ui/Item";

export default function UserPage() {
	const [user, setUser] = useState();
	const [sortValue, setSortValue] = useState("RECENT");
	const [sortedItems, setSortedItems] = useState();
	const [itemsToShow, setItemsToShow] = useState(12);
	const { creatorId } = useParams();
	const { imageLink, profilePicture, walletCode, name, creationDate, items } =
		user || {};

	useEffect(() => {
		setSortedItems(
			items
				?.slice()
				.sort((a, b) =>
					sortValue === "HIGH_TO_LOW"
						? b.price - a.price
						: sortValue === "LOW_TO_HIGH"
							? a.price - b.price
							: a - b,
				),
		);
	}, [sortValue, items]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				creatorId &&
					`https://remote-internship-api-production.up.railway.app/user/${creatorId}`,
			);
			setUser(data.data);
		})();
	}, [creatorId]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{user ? (
				<>
					<header
						style={{
							backgroundImage: `url(${imageLink})`,
						}}
						id="user-header"
					></header>

					<section id="user-info">
						<div className="row">
							<div className="user-info__wrapper">
								<figure className="user-info__img__wrapper">
									<img
										src={profilePicture}
										alt={name}
										className="user-info__img"
									/>
								</figure>
								<h1 className="user-info__name">{name}</h1>
								<div className="user-info__details">
									<span className="user-info__wallet">
										<FontAwesomeIcon
											icon={faEthereum}
											className="user-info__wallet__icon"
										/>
										<span className="user-info__wallet__data">
											{walletCode}
										</span>
									</span>
									<span className="user-info__year">
										<span className="user-info__year__data">
											Joined {creationDate}
										</span>
									</span>
								</div>
							</div>
						</div>
					</section>

					<section id="user-items">
						<div className="row user-items__row">
							<div className="user-items__header">
								<div className="user-items__header__left">
									<span className="user-items__header__text">
										{items?.length} items
									</span>
								</div>
								<select
									className="user-items__header__sort"
									value={sortValue}
									onChange={(event) => setSortValue(event.target.value)}
								>
									<option value="RECENT">Recently purchased</option>
									<option value="HIGH_TO_LOW">Price high to low</option>
									<option value="LOW_TO_HIGH">Price low to high</option>
								</select>
							</div>
							<div className="user-items__body">
								{sortedItems?.slice(0, itemsToShow).map((item) => (
									<div className="item-column" key={item.itemId}>
										<Item item={item} />
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
				</>
			) : null}
		</>
	);
}
