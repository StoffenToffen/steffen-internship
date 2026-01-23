import { Link } from "react-router-dom";

export default function CollectionHeader({ collection }) {
	const {
		title,
		logo,
		imageLink,
		totalVolume,
		floor,
		bestOffer,
		listed,
		owners,
		creator,
		creatorId,
	} = collection;

	return (
		<header
			style={{
				backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.2)), 
        url(${imageLink})`,
			}}
			id="collection-header"
		>
			<div className="row collection-header__row">
				<div className="collection-header__content">
					<div className="collection-header__left">
						<img
							src={logo}
							alt="collection logo"
							className="collection-header__img"
						/>
						<div className="collection-header__name">{title}</div>
						<Link
							to={`/user/${creatorId}`}
							className="collection-header__author"
						>
							{creator}
						</Link>
					</div>
					<div className="collection-header__right">
						<div className="collection-header__columns">
							<div className="collection-header__column">
								<span className="collection-header__column__data">
									<span className="semibold">{totalVolume}</span> ETH
								</span>
								<span className="collection-header__column__label">
									Total volume
								</span>
							</div>
							<div className="collection-header__column">
								<span className="collection-header__column__data">
									<span className="semibold">
										{parseFloat(floor).toFixed(2)}
									</span>{" "}
									ETH
								</span>
								<span className="collection-header__column__label">
									Floor price
								</span>
							</div>
							<div className="collection-header__column">
								<span className="collection-header__column__data">
									<span className="semibold">{bestOffer}</span> ETH
								</span>
								<span className="collection-header__column__label">
									Best offer
								</span>
							</div>
							<div className="collection-header__column">
								<span className="collection-header__column__data">
									<span className="semibold">{listed}%</span>
								</span>
								<span className="collection-header__column__label">Listed</span>
							</div>
							<div className="collection-header__column">
								<span className="collection-header__column__data">
									<span className="semibold">{owners}</span>
								</span>
								<span className="collection-header__column__label">
									Owners (Unique)
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
