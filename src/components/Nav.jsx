import React, { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</>
	);
}
