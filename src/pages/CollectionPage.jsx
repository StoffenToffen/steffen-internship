import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionInfo from "../components/collection/CollectionInfo";
import CollectionItems from "../components/collection/CollectionItems";

export default function CollectionPage() {
	const [collection, setCollection] = useState();
	const { collectionId } = useParams();

	useEffect(() => {
		(async () => {
			const data = await axios.get(
				`https://remote-internship-api-production.up.railway.app/collection/${collectionId}`,
			);
			setCollection(data.data.data);
		})();
	}, [collectionId]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<CollectionHeader collection={collection} />
			<CollectionInfo collection={collection} />
			<CollectionItems collection={collection} />
		</>
	);
}
