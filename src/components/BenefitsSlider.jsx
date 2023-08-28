/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { useState } from "react";
import Button from "./utils/Button";
import Arrow from "../assets/images/homepage/Arrow.svg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideData = [
	{
		subheading:
			"Convene an international partnership for development of space based energy.",
		bodycopy:
			"The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.",
		buttonText: "Business Plan",
	},
	{
		subheading: "Promote Global Collaboration for Renewable Energy.",
		bodycopy:
			"Global efforts are required to transition to renewable energy sources. Collaboration between nations can accelerate this process and make it more cost-effective.",
		buttonText: "Learn More",
	},
	{
		subheading: "Drive Innovation in Clean Transportation.",
		bodycopy:
			"The future of transportation is electric. Governments and private sectors must invest in R&D to make electric vehicles more accessible and efficient.",
		buttonText: "Invest Now",
	},
	{
		subheading: "Advocate for Sustainable Agriculture.",
		bodycopy:
			"Sustainable farming practices are essential for food security and environmental conservation. Policymakers must prioritize this in their agendas.",
		buttonText: "Policy Guide",
	},
	{
		subheading: "Champion Water Conservation Initiatives.",
		bodycopy:
			"Water scarcity is a growing concern. Innovative water management and conservation techniques are crucial for a sustainable future.",
		buttonText: "Get Involved",
	},
	{
		subheading: "Foster Community-Led Environmental Programs.",
		bodycopy:
			"Community involvement is key to successful environmental programs. Local initiatives can make a big difference in conservation efforts.",
		buttonText: "Join Us",
	},
];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container w-10/12 mx-auto md:min-h-[400px] min-h-[450px]">
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
                <p className="bodycopy md:w-6/12 w-full mb-20">{slide.bodycopy}</p>
                <Button text={slide.buttonText} />
              </div>
            </div>
                  ))}
        </div>
      </div>
      <div className="slider-controls md:my-10">
        <button onClick={prevSlide} type="button" className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full rotate-90">
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
        <button onClick={nextSlide} type="button" className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full -rotate-90">
          <img src={Arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
