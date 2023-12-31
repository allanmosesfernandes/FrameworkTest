import { useState, useEffect } from "react";
import Button from "./utils/Button";
import BenefitsSlider from "./BenefitsSlider";

function Benefits() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section className="relative z-10 bg-mountains h-full flex items-center flex-col bg-no-repeat bg-cover">
			<div className="absolute bg-blueGradient w-full h-full items-center justify-center bg-no-repeat bg-auto lg:bg-cover " />
			<div className="content md:mt-[10rem] mt-[5rem] text-center flex flex-col z-50 w-full">
				<p className="spacedText mb-4">
					{isMobile ? "Our Objectives" : "The benefits of Space Solar"}
				</p>
				<BenefitsSlider />
			</div>
		</section>
	);
}

export default Benefits;
