import Logo from "../assets/images/homepage/Logo.svg";
import TwitterLogo from "../assets/images/twitter.svg";
import FrameworkLogo from "../assets/images/framework-logo.svg";

function Footer() {
	return (
		<footer className="bg-footerBlue lg:px-10 px-4 text-white">
			{/* Footer Top */}
			<div className="flex lg:flex-row flex-col py-[80px] items-baseline justify-between">
				<div className="flex items-center justify-between lg:w-auto w-full">
					<img
						src={Logo}
						alt="Logo"
						className="md:w-[130px] w-[85px] lg:mb-auto mb-[66px]"
					/>
					<img
						src={TwitterLogo}
						alt="Twitter"
						className="lg:hidden block self-baseline"
					/>
				</div>
				<div className="flex flex-col self-start gap-[18px] lg:mb-auto mb-[50px] ">
					<p className="text-sm uppercase text-white font-medium leading-17 tracking-[4.2px]">
						Contact us
					</p>
					<a
						className="lg:text-3xl text-2xl leading-[41px] text-white border-b w-fit cursor-pointer"
						href="mailto:info@starform.co"
					>
						info@starform.co
					</a>
					<a
						className="cursor-pointer lg:text-3xl text-2xl leading-[41px] text-white border-b w-fit"
						href="tel:+44 1235428199"
					>
						+44 (0)1235 428199
					</a>
				</div>
				{/* Navigation */}
				<div className="flex flex-col self-start lg:mb-auto mb-[50px]">
					<p className="uppercase font-medium text-white mb-[26px] tracking-[3.6px] md:text-auto text-xs">
						Navigation
					</p>
					<div className="nav-links opacity-60 text-white flex gap-[50px]">
						<div className="nav-left">
							<ul className="flex flex-col gap-[20px] footer-links">
								<li>Business Plan</li>
								<li>About us</li>
								<li>Technology</li>
								<li>Investor Relations </li>
								<li>News & Resources</li>
							</ul>
						</div>
						<div className="nav-right">
							<ul className="flex flex-col gap-[20px] footer-links">
								<li>FAQs</li>
								<li>Contact us</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Legal */}
				<div className="flex flex-col text-white self-start md:mb-auto mb-[50px]">
					<p className="uppercase font-medium mb-[26px] tracking-[3.6px]md:text-auto text-xs">
						Legal
					</p>
					<ul className="flex flex-col gap-[20px] opacity-60 footer-links">
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div>
					<img src={TwitterLogo} alt="Twitter" className="lg:block hidden" />
				</div>
			</div>
			{/* Footer Bottom */}
			<div className="flex lg:flex-row flex-col w-full justify-between pb-[30px] md:gap-auto gap-[20px] lg:mt-auto -mt-[50px]">
				<p className="tracking-[0.24px] text-xs">
					© StarForm 2022 | All rights reserved.
				</p>
				<p className="flex gap-2 text-xs items-center">
					Website design by{" "}
					<span>
						<a href="https://www.weareframework.co.uk/">
                            <img src={FrameworkLogo} alt="Framework" className="w-[82px]"/>
                        </a>
					</span>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
