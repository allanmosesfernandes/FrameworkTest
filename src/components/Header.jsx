import React, { useState } from "react";
import Logo from "../assets/images/homepage/Logo.svg";
import ArrowYellow from "../assets/images/arrowYellow.svg";

function Header() {
	const LINKS = [
		{ name: "Business Plan", link: "#home" },
		{ name: "About us", link: "#home" },
		{ name: "Technology", link: "#home" },
		{ name: "Investor Relations", link: "#home" },
		{ name: "News & Resources", link: "#home", subMenu: ["News", "Resources"] },
		{ name: "Contact us", link: "#home" },
	];

	const [openMenu, setOpenMenu] = useState(false);
	const [openSubMenu, setOpenSubMenu] = useState(false);

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
						onClick={() => {
							setOpenMenu(!openMenu);
							if (openMenu) {
								// If the menu is currently open, then we are about to close it
								setOpenSubMenu(false); // Reset the submenu state
							}
						}}
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
							{link.subMenu ? (
								<>
									<button
										onClick={() => setOpenSubMenu(true)}
										className="text-white hover:text-secondary hover:underline ease-in duration-200 hover:decoration-solid text-xl flex items-center"
									>
										{link.name}{" "}
										<span>
											<img
												src={ArrowYellow}
												alt="yellow arrow"
												className="ml-[20px]"
											/>
										</span>
									</button>
									{openSubMenu && (
										<ul className="absolute top-0 left-0 w-full h-screen bg-spaceBlue flex flex-col p-4 gap-4 pt-[70px]">
											<li className="text-xl ">
												<button
													onClick={() => setOpenSubMenu(false)}
													className="text-white flex items-center gap-2"
												>
													<span>
														<img
															src={ArrowYellow}
															alt="yellow arrow"
															className="rotate-180"
														/>
													</span>
													{link.name}
												</button>
											</li>
											{link.subMenu.map((subLink, subIndex) => (
												<li key={subIndex} className="text-xl">
													<a href="#home" className="text-white ">
														{subLink}
													</a>
												</li>
											))}
										</ul>
									)}
								</>
							) : (
								<a
									href={link.link}
									className="text-white text-xl hover:text-secondary hover:underline ease-in duration-200 hover:decoration-solid"
								>
									{link.name}
								</a>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
