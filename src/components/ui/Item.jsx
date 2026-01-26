import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Item = ({ item: { itemId, price, lastSale, title, imageLink } }) => {
	return (
		<Link to={`/item/${itemId}`} className="item">
			<figure className="item__img__wrapper">
				<img src={imageLink} alt={title} className="item__img" />
			</figure>
			<div className="item__details">
				<span className="item__details__name">{title}</span>
				<span className="item__details__price">{price} ETH</span>
				<span className="item__details__last-sale">
					Last sale: {lastSale} ETH
				</span>
			</div>
			<div className="item__see-more">
				<button type="button" className="item__see-more__button">
					See More
				</button>
				<div className="item__see-more__icon">
					<FontAwesomeIcon icon={faShoppingBag} />
				</div>
			</div>
		</Link>
	);
};

export default Item;
