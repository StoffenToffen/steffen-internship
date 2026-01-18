import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VerifiedIcon from "../../assets/verified.png";
import TrendingSkeleton from "../ui/TrendingSkeleton.jsx";

export default function Trending() {
	const [trending, setTrending] = useState();

	useEffect(() => {
		(async () => {
			const data = await axios.get(
				"https://remote-internship-api-production.up.railway.app/trendingnfts",
			);
			setTrending(data.data.data.slice(0, 10));
		})();
	}, []);

	return (
		<section id="trending">
			<div className="container">
				<div className="row trending__row">
					<div className="trending__header">
						<h2 className="trending__header__title">Trending NFTs</h2>
						<Link className="trending__header__button" to={"/collections"}>
							View All
						</Link>
					</div>
					<div className="trending__body">
						<div className="trending-column">
							<div className="trending-column__header">
								<div className="trending-column__header__rank">#</div>
								<div className="trending-column__header__collection">
									Collection
								</div>
								<div className="trending-column__header__price">
									Floor Price
								</div>
								<div className="trending-column__header__price">Volume</div>
							</div>
							<div className="trending-column__body">
								{trending
									? trending
											.slice(0, 5)
											.map(
												({
													rank,
													floor,
													title,
													imageLink,
													totalVolume,
													collectionId,
												}) => (
													<Link
														to={`/collection/${collectionId}`}
														key={rank}
														className="trending-collection"
													>
														<div className="trending-collection__rank">
															{rank}
														</div>
														<div className="trending-collection__collection">
															<figure className="trending-collection__img__wrapper">
																<img
																	src={imageLink}
																	alt="NFT logo"
																	className="trending-collection__img"
																/>
															</figure>
															<div className="trending-collection__name">
																{title}
															</div>
															<img
																src={VerifiedIcon}
																alt="verified"
																className="trending-collection__verified"
															/>
														</div>
														<div className="trending-collection__price">
															<span className="trending-collection__price__span">
																{parseFloat(floor).toFixed(2)} ETH
															</span>
														</div>
														<div className="trending-collection__volume">
															<span className="trending-collection__volume__span">
																{totalVolume} ETH
															</span>
														</div>
													</Link>
												),
											)
									: new Array(5)
											.fill(0)
											.map((_, index) => <TrendingSkeleton key={index} />)}
							</div>
						</div>
						<div className="trending-column">
							<div className="trending-column__header trending-column__header2">
								<div className="trending-column__header__rank">#</div>
								<div className="trending-column__header__collection">
									Collection
								</div>
								<div className="trending-column__header__price">
									Floor Price
								</div>
								<div className="trending-column__header__price">Volume</div>
							</div>
							<div className="trending-column__body">
								{trending
									? trending
											.slice(5, 10)
											.map(
												({
													rank,
													floor,
													title,
													imageLink,
													totalVolume,
													collectionId,
												}) => (
													<Link
														to={`/collection/${collectionId}`}
														key={rank}
														className="trending-collection"
													>
														<div className="trending-collection__rank">
															{rank}
														</div>
														<div className="trending-collection__collection">
															<figure className="trending-collection__img__wrapper">
																<img
																	src={imageLink}
																	alt="NFT logo"
																	className="trending-collection__img"
																/>
															</figure>
															<div className="trending-collection__name">
																{title}
															</div>
															<img
																src={VerifiedIcon}
																alt="verified"
																className="trending-collection__verified"
															/>
														</div>
														<div className="trending-collection__price">
															<span className="trending-collection__price__span">
																{parseFloat(floor).toFixed(2)} ETH
															</span>
														</div>
														<div className="trending-collection__volume">
															<span className="trending-collection__volume__span">
																{totalVolume} ETH
															</span>
														</div>
													</Link>
												),
											)
									: new Array(5)
											.fill(0)
											.map((_, index) => <TrendingSkeleton key={index} />)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
