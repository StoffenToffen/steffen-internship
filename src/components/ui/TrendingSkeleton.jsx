import Skeleton from "./Skeleton";

const TrendingSkeleton = () => {
	return (
		<div className="trending-collection">
			<div className="trending-collection__rank"></div>
			<div className="trending-collection__collection">
				<figure className="trending-collection__img__wrapper">
					<Skeleton width="100%" height="100%" />
				</figure>
				<div className="trending-collection__name">
					<Skeleton width="130px" height="20px" borderRadius="4px" />
				</div>
			</div>
			<div className="trending-collection__price">
				<span className="trending-collection__price__span">
					<Skeleton width="80px" height="20px" borderRadius="4px" />
				</span>
			</div>
			<div className="trending-collection__volume">
				<span className="trending-collection__volume__span">
					<Skeleton width="80px" height="20px" borderRadius="4px" />
				</span>
			</div>
		</div>
	);
};

export default TrendingSkeleton;
