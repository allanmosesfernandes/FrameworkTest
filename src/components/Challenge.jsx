/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Button from "./utils/Button";
import ClimateChange from "../assets/images/climateChange.png";

// eslint-disable-next-line prettier/prettier
function Mission() {
return (
  <section className="bg-spaceBlue flex lg:flex-row flex-col-reverse font-sora justify-center lg:px-10  pt-[8.5rem] px-4 gap-6 overflow-hidden mb-20">
    {/* Left */}
    <div className="lg:w-6/12 w-full flex flex-col mt-10">
      <p className="spacedText">
        The Global Challenge
      </p>
      <p className="subheading text-5xl leading-63 my-4 tracking-[-1px]">
        Climate change and the pressures on global energy resources are urgent
        problems. The UK has set out an ambitious national clean energy policy
        to fully decarbonise the economy by 2050.
      </p>
      <p className="bodycopy mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vitae elementum interdum scelerisque quisque donec nulla. Velit diam quam nullam elit hac sit. Nunc, lacus, facilisis mattis amet mauris volutpat dui tellus nam. Neque, rhoncus placerat vitae arcu habitant. Dignissim quam ipsum dolor egestas non orci. At enim ut elementum.
      </p>
      <Button text="About us" />
    </div>
    {/* Right */}
    <div className="lg:w-6/12 w-full flex flex-col justify-center lg:items-center items-baseline relative ">
      <div className="absolute top-[-180px] w-[450px] bg-circles bg-contain right-[-25%] bg-no-repeat h-[450px] overflow-hidden lg:overflow-auto" />
      <img src={ClimateChange} alt="Climate Change" className="w-[600px] imageClip" />
    </div>
  </section>
);
}

export default Mission;
