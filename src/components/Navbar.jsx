import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar({ menuOpen, setMenuOpen }) {
	return (
		<nav className="nav">
			<div className="row nav__row">
				<div className="nav__left">
					<Link to={"/"}>
						<img src={Logo} className="nav__logo" />
					</Link>
					<div className="nav__divider"></div>
					<Link to={"/"} className="nav__link">
						Home
					</Link>
					<Link to={"/collections"} className="nav__link">
						Collections
					</Link>
				</div>

				<div className="nav__search">
					<FontAwesomeIcon icon={faSearch} className="nav__search__icon" />
					<input
						type="text"
						placeholder="Search"
						className="nav__search__input"
					/>
					<div className="nav__search__icon2">/</div>
				</div>

				<div className="nav__right">
					<FontAwesomeIcon
						icon={faSearch}
						className="nav__right__icon disabled"
					/>
					<FontAwesomeIcon
						icon={menuOpen ? faTimes : faBars}
						className="nav__right__icon nav__menu"
						onClick={() => setMenuOpen(!menuOpen)}
					/>
				</div>
			</div>
		</nav>
	);
}
