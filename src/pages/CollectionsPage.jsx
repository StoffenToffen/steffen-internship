import axios from "axios";
import { useEffect, useState } from "react";

import Collection from "../components/ui/Collection";
import CollectionsSkeleton from "../components/ui/CollectionsSkeleton";

export default function CollectionsPage() {
	const [collections, setCollections] = useState();
	const [collectionsToShow, setCollectionsToShow] = useState(12);

	useEffect(() => {
		window.scrollTo(0, 0);

		(async () => {
			const { data } = await axios.get(
				"https://remote-internship-api-production.up.railway.app/collections",
			);
			setCollections(data.data);
		})();
	}, []);

	return (
		<div className="container">
			<div className="row">
				<h1 className="collections-page__title">Collections</h1>
				<div className="collections__body">
					{collections
						? collections.slice(0, collectionsToShow).map((collection) => (
								<div className="collection-column" key={collection.id}>
									<Collection data={collection} />
								</div>
							))
						: new Array(12).fill(0).map((_, index) => (
								<div key={index} className="collection-column">
									<CollectionsSkeleton />
								</div>
							))}
				</div>
				{collectionsToShow < collections?.length && (
					<button
						type="button"
						className="collections-page__button"
						onClick={() => {
							setCollectionsToShow(collectionsToShow + 6);
						}}
					>
						Load more
					</button>
				)}
			</div>
		</div>
	);
}
