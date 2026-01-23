import Skeleton from "./Skeleton.jsx";

const CollectionsSkeleton = () => {
	return (
		<div className="collection">
			<Skeleton width="500px" height="200px" />
			<div className="collection__info">
				<div className="collection__stats">
					<div className="collection__stat">
						<span className="collection__stat__label">
							<Skeleton width="40px" height="16px" borderRadius="4px" />
						</span>
						<span className="collection__stat__data">
							<Skeleton width="80px" height="16px" borderRadius="4px" />
						</span>
					</div>
					<div className="collection__stat">
						<span className="collection__stat__label">
							<Skeleton width="40px" height="16px" borderRadius="4px" />
						</span>
						<span className="collection__stat__data">
							<Skeleton width="80px" height="16px" borderRadius="4px" />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollectionsSkeleton;
