import { Link } from "react-router-dom";

const Collection = ({
	data: { floor, title, imageLink, totalVolume, collectionId, id },
}) => {
	return (
		<Link to={`/collection/${collectionId || id}`} className="collection">
			<img src={imageLink} alt={title} className="collection__img" />
			<div className="collection__info">
				<h3 className="collection__name">{title}</h3>
				<div className="collection__stats">
					<div className="collection__stat">
						<span className="collection__stat__label">Floor</span>
						<span className="collection__stat__data">
							{parseFloat(floor).toFixed(2)} ETH
						</span>
					</div>
					<div className="collection__stat">
						<span className="collection__stat__label">Total Volume</span>
						<span className="collection__stat__data">{totalVolume} ETH</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Collection;
