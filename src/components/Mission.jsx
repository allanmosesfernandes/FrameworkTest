import Button from "./utils/Button";

function Mission() {
	return (
		<section className="bg-spaceBlue flex md:flex-row flex-col font-sora justify-center lg:p-10 pt-10 px-4">
			{/* Left */}
			<div className="md:w-4/12 w-full flex flex-col mt-8">
				<p className="spacedText">Our Mission</p>
			</div>
			{/* Right */}
			<div className="md:w-8/12 w-full flex flex-col justify-center items-baseline">
				<p className="subheading md:text-4xl text-2xl md:leading-60 leading-38 md:mt-0 mt-2 md:mb-12 mb-8">
					Climate change and the pressures on global energy resources are urgent
					problems. The UK has set out an ambitious national clean energy policy
					to fully decarbonise the economy by 2050.
				</p>
				<Button text="Business Plan" />
			</div>
		</section>
	);
}

export default Mission;
