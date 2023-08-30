/* eslint-disable linebreak-style */
import { useRef } from "react";
import Header from "./Header";
import Mission from "./Mission";
import Arrow from "./utils/Arrow";

function FirstFold() {
	const missionRef = useRef(null);
	const scrollToMission = () => {
		missionRef?.current?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<div className="first-fold bg-hero-img h-screen md:bg-bottom bg-top bg-cover bg-no-repeat relative">
				<Header />
				<div className="font-sora text-white text-center md:mt-[8rem] sm:mt-[6rem] mt-[5rem]">
					<h2 className="lg:text-8xl md:leading-137 leading-54 md:tracking-[-3px] tracking-[-1px] sm:text-6xl text-5xl mx-auto">
						Welcome <br className="md:hidden block" />
						to StarForm
					</h2>
					<p className="md:text-xl text-lg lg:w-[35%] w-[70%] mx-auto mt-4 leading-35">
						Helping nations achieve{" "}
						<span className="text-secondary">
							Lower emissions with Star-Based Solar Technology
						</span>
					</p>
				</div>
				<Arrow onClick={scrollToMission} />
			</div>
			<Mission ref={missionRef} />
		</>
	);
}

export default FirstFold;
