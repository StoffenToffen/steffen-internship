import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VerifiedIcon from "../../assets/verified.png";
import Skeleton from "../ui/Skeleton.jsx";

export default function SelectedCollection() {
	const [selectedCollection, setSelectedCollection] = useState();

	useEffect(() => {
		(async () => {
			const data = await axios.get(
				"https://remote-internship-api-production.up.railway.app/selectedcollection",
			);
			setSelectedCollection(data.data.data);
		})();
	}, []);

	return (
		<header>
			<div className="selected-collection">
				{selectedCollection ? (
					<>
						<video
							autoPlay
							muted
							loop
							playsInline
							poster={selectedCollection.thumbnail}
							src={selectedCollection.videoLink}
							className="selected-collection__bg"
						/>
						<div className="selected-collection__description">
							<img
								src={selectedCollection.logo}
								alt="collection logo"
								className="selected-collection__logo"
							/>
							<h1 className="selected-collection__title">
								{selectedCollection.title}
							</h1>
							<Link
								to={`/user/${selectedCollection.creatorId}`}
								className="selected-collection__author"
							>
								By {selectedCollection.creator}
								<img
									src={VerifiedIcon}
									className="selected-collection__author__verified"
									alt="verified"
								/>
							</Link>
							<div className="selected-collection__details">
								{selectedCollection.amountOfItems} items ·{" "}
								{selectedCollection.floorPrice} ETH
							</div>
							<Link
								to={`/collection/${selectedCollection.collectionId}`}
								className="selected-collection__button"
							>
								<div className="green-pulse"></div>
								View Collection
							</Link>
						</div>
					</>
				) : (
					<Skeleton width="100%" height="100%" />
				)}
			</div>
		</header>
	);
}
