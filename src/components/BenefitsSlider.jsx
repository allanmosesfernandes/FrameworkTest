import { useState } from "react";
import Button from "./utils/Button";
import Arrow from "../assets/images/homepage/Arrow.svg";
import { slideData } from "./utils/constants.js";

function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length,
		);
	};

	return (
		<div className="slider-wrapper">
			<div className="slider-container w-10/12 mx-auto md:min-h-[400px] min-h-[500px]">
				<div className="slider">
					{slideData.map((slide, index) => (
						<div
							className={`slide ${index === currentIndex ? "active" : ""}`}
							key={index}
							style={{ opacity: index === currentIndex ? 1 : 0 }}
						>
							<div className="flex flex-col items-center justify-center">
								<p className="subheading md:text-5xl text-3xl leading-38 md:leading-63 tracking-[-1px] my-4">
									{slide.subheading}
								</p>
								<p className="bodycopy md:w-6/12 w-full mb-20">
									{slide.bodycopy}
								</p>
								<Button text={slide.buttonText} />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="slider-controls my-10">
				<button
					onClick={prevSlide}
					type="button"
					className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full rotate-90"
				>
					<img src={Arrow} alt="Arrow" />
				</button>
				<div className="dots">
					{slideData.map((_, index) => (
						<span
							className={`dot ${index === currentIndex ? "active" : ""}`}
							key={index}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
				<button
					onClick={nextSlide}
					type="button"
					className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full -rotate-90"
				>
					<img src={Arrow} alt="Arrow" />
				</button>
			</div>
		</div>
	);
}

export default Slider;
