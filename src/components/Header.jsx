import React, { useState } from "react";
import Logo from "../assets/images/homepage/Logo.svg";

function Header() {
	const LINKS = [
		{ name: "Business Plan", link: "#home" },
		{ name: "About us", link: "#home" },
		{ name: "Technology", link: "#home" },
		{ name: "Investor Relations", link: "#home" },
		{ name: "News & Resources", link: "#home" },
		{ name: "Contact us", link: "#home" },
	];

	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header
			className={`lg:p-10 p-4 font-sora text-base font-normal transition-all duration-200 ease-in ${
				openMenu ? "bg-spaceBlue overflow-hidden" : "bg-transparent"
			}`}
		>
			<nav className="lg:flex items-center justify-between">
				<div className="logo">
					<img src={Logo} alt="Logo" />
				</div>
				{/* Nav Left */}
				{/* Hamburger Icon */}
				<div className="absolute right-2 top-[0.5rem] lg:hidden block">
					<button
						className={openMenu ? "hamburger-icon open" : "hamburger-icon"}
						type="button"
						onClick={() => setOpenMenu(!openMenu)}
					>
						<span className="hamburger-top" />
						<span className="hamburger-middle" />
						<span className="hamburger-bottom" />
					</button>
				</div>
				<ul
					className={`lg:flex-row lg:w-auto lg:h-auto w-full h-screen flex-col flex left-0 lg:p-0 lg:gap-4 gap-6 lg:items-center absolute lg:static lg:bg-transparent bg-spaceBlue z-10 lg:mt-0 mt-4 transition-all duration-200 ease-in ${
						openMenu ? "top-10 px-4 py-10" : "top-[-1500px] px-4 py-4"
					}`}
				>
					{LINKS.map((link, index) => (
						<li key={index}>
							<a
								href={link.link}
								className="text-white hover:text-secondary hover:underline ease-in duration-200 hover:decoration-solid"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
