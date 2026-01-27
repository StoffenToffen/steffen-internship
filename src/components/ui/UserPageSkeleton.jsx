import ItemSkeleton from "./ItemSkeleton";
import Skeleton from "./Skeleton";

const UserPageSkeleton = () => {
	return (
		<>
			<header id="user-header">
				<Skeleton width="100%" height="100%" />
			</header>

			<section id="user-info">
				<div className="row">
					<div className="user-info__wrapper">
						<figure className="user-info__img__wrapper">
							<Skeleton width="100%" height="100%" />
						</figure>
						<h1 className="user-info__name">
							<Skeleton width="200px" height="16px" borderRadius="4px" />
						</h1>
						<div className="user-info__details">
							<span className="user-info__wallet">
								<span className="user-info__wallet__data">
									<Skeleton width="260px" height="16px" borderRadius="4px" />
								</span>
							</span>
							<span className="user-info__year">
								<span className="user-info__year__data">
									<Skeleton width="130px" height="16px" borderRadius="4px" />
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
								<Skeleton width="130px" height="16px" borderRadius="4px" />
							</span>
						</div>
						<select className="user-items__header__sort">
							<option value="RECENT">Recently purchased</option>
							<option value="HIGH_TO_LOW">Price high to low</option>
							<option value="LOW_TO_HIGH">Price low to high</option>
						</select>
					</div>
					<div className="user-items__body">
						{new Array(12).fill(0).map((_, index) => (
							<div className="item-column" key={index}>
								<ItemSkeleton />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default UserPageSkeleton;
