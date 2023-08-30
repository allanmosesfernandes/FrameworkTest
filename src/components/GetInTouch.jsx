import Button from "./utils/Button";

function GetInTouch() {
    return (
			<div className="get-in-touch bg-contactBG h-screen bg-cover bg-center flex flex-col items-center justify-center bg-no-repeat">
				<div className="absolute w-full h-full bg-blueLinear z-1 md:bg-center bg-top bg-no-repeat bg-auto lg:bg-cover "></div>
				<div className="z-10 justify-center mx-auto flex flex-col text-center items-center">
					<p className="spacedText font-medium">Get in touch</p>
					<p className="font-sora md:text-5xl text-3xl leading-38 md:leading-63 tracking-[-1px] text-white w-7/12 mt-2 mb-6">
						Help us get one step closer to Net Zero Star-Based Solar Power.
					</p>
					<Button text="Contact Us" />
				</div>
			</div>
		);
}

export default GetInTouch;