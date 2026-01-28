import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
	faShapes,
	faShoppingBag,
	faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import RecommendedItems from "../components/item/RecommendedItems";
import ItemPageSkeleton from "../components/ui/ItemPageSkeleton";

export default function ItemPage({ swiperSettings }) {
	const [item, setItem] = useState();
	const [collectionData, setCollectionData] = useState();
	const [timeLeft, setTimeLeft] = useState();
	const { itemId } = useParams();
	const { hours, minutes, seconds } = countdown();
	const {
		id,
		collectionId,
		title,
		views,
		category,
		imageLink,
		ethPrice,
		usdPrice,
		favorites,
		owner,
		ownerId,
		collection,
		expiryDate,
	} = item || {};

	function countdown() {
		if (timeLeft < 0) ({ hours: 0, minutes: 0, seconds: 0 });

		return {
			hours: Math.floor((timeLeft / 1000 / 60 / 60) % 24),
			minutes: Math.floor((timeLeft / 1000 / 60) % 60),
			seconds: Math.floor((timeLeft / 1000) % 60),
		};
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(expiryDate - Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, [expiryDate]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				collectionId &&
					`https://remote-internship-api-production.up.railway.app/collection/${collectionId}`,
			);
			setCollectionData(data.data);
		})();
	}, [collectionId]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`https://remote-internship-api-production.up.railway.app/item/${itemId}`,
			);
			setItem(data.data);
			setTimeLeft(data.data.expiryDate - Date.now());
		})();
	}, [itemId]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [itemId]);

	return (
		<>
			{id === itemId && collectionData ? (
				<>
					<section id="item-info">
						<div className="container">
							<div className="row item-page__row">
								<div className="item-page__left">
									<figure className="item-page__img__wrapper">
										<div className="item-page__img__details">
											<FontAwesomeIcon
												icon={faEthereum}
												className="item-page__img__icon"
											/>
											<div className="item-page__img__likes">
												<FontAwesomeIcon
													icon={faHeart}
													className="item-page__img__icon"
												/>
												<span className="item-page__img__likes__text">
													{favorites}
												</span>
											</div>
										</div>
										<img
											src={imageLink}
											alt={title}
											className="item-page__img"
										/>
									</figure>
								</div>
								<div className="item-page__right">
									<Link
										to={`/collection/${collectionId}`}
										className="item-page__collection light-blue"
									>
										{collection}
									</Link>
									<h1 className="item-page__name">{title}</h1>
									<span className="item-page__owner">
										Owned by{" "}
										<Link
											to={`/user/${ownerId}`}
											className="light-blue item-page__owner__link"
										>
											{owner}
										</Link>
									</span>
									<div className="item-page__details">
										<div className="item-page__detail">
											<FontAwesomeIcon
												icon={faEye}
												className="item-page__detail__icon"
											/>
											<span className="item-page__detail__text">
												{views} views
											</span>
										</div>
										<div className="item-page__detail">
											<FontAwesomeIcon
												icon={faHeart}
												className="item-page__detail__icon"
											/>
											<span className="item-page__detail__text">
												{favorites} favorites
											</span>
										</div>
										<div className="item-page__detail">
											<FontAwesomeIcon
												icon={faShapes}
												className="item-page__detail__icon"
											/>
											<span className="item-page__detail__text">
												{category}
											</span>
										</div>
									</div>
									<div className="item-page__sale">
										<div className="item-page__sale__header">
											<div className="green-pulse"></div>
											<span>
												Sale ends in {hours}h {minutes}m {seconds}s
											</span>
										</div>
										<div className="item-page__sale__body">
											<span className="item-page__sale__label">
												Current price
											</span>
											<div className="item-page__sale__price">
												<span className="item-page__sale__price__eth">
													{ethPrice} ETH
												</span>
												<span className="item-page__sale__price__dollars">
													{usdPrice}
												</span>
											</div>
											<div className="item-page__sale__buttons">
												<div className="item-page__sale__buy">
													<button
														type="button"
														className="item-page__sale__buy__button disabled"
													>
														Buy now
													</button>
													<button
														type="button"
														className="item-page__sale__buy__icon disabled"
													>
														<FontAwesomeIcon icon={faShoppingBag} />
													</button>
												</div>
												<button
													type="button"
													className="item-page__sale__offer disabled"
												>
													<FontAwesomeIcon icon={faTag} />
													Make offer
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<RecommendedItems
						excludeItemId={itemId}
						collection={collectionData}
						collectionId={collectionId}
						swiperSettings={swiperSettings}
					/>
				</>
			) : (
				<ItemPageSkeleton swiperSettings={swiperSettings} />
			)}
		</>
	);
}
