/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import Button from "./utils/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Benefits() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

return (
  <section className="relative z-10 bg-mountains h-screen flex items-center flex-col">
    <div className="absolute bg-blueGradient w-full h-screen" />
    <div className="content mt-[10rem] text-center flex flex-col items-center justify-center z-50">
      <p className="spacedText">The benefits of Space Solar</p>
      <Slider {...settings}>
        <div className="">
          <div className="flex flex-col items-center justify-center w-6/12 m-auto">
              <p className="subheading text-5xl leading-63 tracking-[-1px] my-4">
                Convene an international partnership for development of space based energy.
              </p>
              <p className="bodycopy mb-20">
                The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.
              </p>
              <Button text="Business Plan" />
          </div>
        </div>

      </Slider>
    </div>
  </section>
);
}

export default Benefits;
