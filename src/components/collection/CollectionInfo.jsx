export default function CollectionInfo({ collection }) {
	const { description, items, createdDate, creatorEarnings, chain } =
		collection || {};

	return (
		<section id="collection-info">
			<div className="row">
				<div className="collection-info__wrapper">
					<p className="collection-info__description">{description}</p>
					<div className="collection-info__details">
						<span className="collection-info__detail">
							Items
							<span className="collection-info__detail__data">
								{" "}
								{items?.length}
							</span>
						</span>
						·
						<span className="collection-info__detail">
							Created
							<span className="collection-info__detail__data">
								{" "}
								{createdDate}
							</span>
						</span>
						·
						<span className="collection-info__detail">
							Creator earnings
							<span className="collection-info__detail__data">
								{" "}
								{creatorEarnings}%
							</span>
						</span>
						·
						<span className="collection-info__detail">
							Chain
							<span className="collection-info__detail__data"> {chain}</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
