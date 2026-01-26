import ItemSkeleton from "./ItemSkeleton";
import Skeleton from "./Skeleton";

const CollectionPageSkeleton = () => {
	return (
		<>
			<header id="collection-header">
				<Skeleton width="100%" height="100%" />
			</header>

			<section id="collection-info">
				<div className="row">
					<div className="collection-info__wrapper">
						<div className="collection-info__description">
							<Skeleton width="100%" height="16px" borderRadius="4px" />
							<Skeleton width="100%" height="16px" borderRadius="4px" />
							<Skeleton width="70%" height="16px" borderRadius="4px" />
						</div>
						<div className="collection-info__details">
							<span className="collection-info__detail">
								<span className="collection-info__detail__data">
									<Skeleton width="60px" height="16px" borderRadius="4px" />
								</span>
							</span>
							<span className="collection-info__detail">
								<span className="collection-info__detail__data">
									<Skeleton width="130px" height="16px" borderRadius="4px" />
								</span>
							</span>
							<span className="collection-info__detail">
								<span className="collection-info__detail__data">
									<Skeleton width="130px" height="16px" borderRadius="4px" />
								</span>
							</span>
							<span className="collection-info__detail">
								<span className="collection-info__detail__data">
									<Skeleton width="130px" height="16px" borderRadius="4px" />
								</span>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section id="collection-items">
				<div className="row collection-items__row">
					<div className="collection-items__header">
						<div className="collection-items__header__left">
							<span className="collection-items__header__live">
								<Skeleton width="60px" height="16px" borderRadius="4px" />
							</span>
							<span className="collection-items__header__results">
								<Skeleton width="100px" height="16px" borderRadius="4px" />
							</span>
						</div>
						<div className="collection-items__header__sort">
							<Skeleton width="100%" height="100%" borderRadius="8px" />
						</div>
					</div>
					<div className="collection-items__body">
						{new Array(12).fill(0).map((_, index) => (
							<div key={index} className="item-column">
								<ItemSkeleton />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CollectionPageSkeleton;
