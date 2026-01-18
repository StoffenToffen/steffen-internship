import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../ui/Skeleton";

export default function NewCollections() {
	const [newCollections, setNewCollections] = useState()

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
						{newCollections?.map(({ floor, title, imageLink, totalVolume, collectionId}) => (
							<div className="collection-column" key={collectionId}>
								<Link to={`/collection/${collectionId}`} className="collection">
									<img
										src={imageLink}
										alt={title}
										className="collection__img"
									/>
									<div className="collection__info">
										<h3 className="collection__name">{title}</h3>
										<div className="collection__stats">
											<div className="collection__stat">
												<span className="collection__stat__label">Floor</span>
												<span className="collection__stat__data">{parseFloat(floor).toFixed(2)} ETH</span>
											</div>
											<div className="collection__stat">
												<span className="collection__stat__label">
													Total Volume
												</span>
												<span className="collection__stat__data">{totalVolume} ETH</span>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
