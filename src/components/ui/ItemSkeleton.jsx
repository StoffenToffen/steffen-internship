import Skeleton from "./Skeleton";

const ItemSkeleton = () => {
	return (
		<div className="item">
			<figure className="item__img__wrapper">
				<Skeleton width="100%" height="100%" />
			</figure>
			<div className="item__details">
				<span className="item__details__name">
					<Skeleton width="100px" height="16px" borderRadius="4px" />
				</span>
				<span className="item__details__price">
					<Skeleton width="60px" height="16px" borderRadius="4px" />
				</span>
				<span className="item__details__last-sale">
					<Skeleton width="130px" height="16px" borderRadius="4px" />
				</span>
			</div>
		</div>
	);
};

export default ItemSkeleton;
