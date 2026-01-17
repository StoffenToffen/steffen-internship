import {
	faAngleRight,
	faGlobe,
	faHouse,
	faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<nav className={`menu ${menuOpen && "menu-open"}`}>
			<Link onClick={() => setMenuOpen(false)} to={"/"} className="menu__link">
				<FontAwesomeIcon icon={faHouse} className="menu__link__icon" />
				<span className="menu__link__text">Home</span>
				<FontAwesomeIcon icon={faAngleRight} className="menu__link__arrow" />
			</Link>
			<Link
				onClick={() => setMenuOpen(false)}
				to={"/collections"}
				className="menu__link"
			>
				<FontAwesomeIcon icon={faLayerGroup} className="menu__link__icon" />
				<span className="menu__link__text">Collections</span>
				<FontAwesomeIcon icon={faAngleRight} className="menu__link__arrow" />
			</Link>
			<div className="menu__link disabled">
				<FontAwesomeIcon icon={faGlobe} className="menu__link__icon" />
				<span className="menu__link__text">Language</span>
				<span className="menu__link__language">English</span>
			</div>
		</nav>
	);
}
