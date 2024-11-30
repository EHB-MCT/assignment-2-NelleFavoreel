import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/ShowData">ShowData</Link>
				</li>
				<li>
					<Link to="/Data">Data</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
