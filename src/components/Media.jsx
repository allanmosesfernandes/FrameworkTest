/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import useMediaCards from "./utils/useMediaCards";
import CardRibbonColors from "./utils/UtilityFunctions";

function Media() {
    const { post } = useMediaCards();
    const category = "events";
	return (
  <section className="media lg:px-10 px-4">
    <h2 className="font-sora text-white md:text-5xl text-3xl leading-63">
      Media
    </h2>
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-8 font-sora">
      <div className="card bg-black h-[200px] w-[200px]">
        <div
          className="card-category font-bold text-xs uppercase leading-[14.75px] tracking-[3.60px] text-white"
          style={{ backgroundColor: CardRibbonColors(category) }}
        >
          Events
        </div>
      </div>
    </div>
  </section>
	);
}

export default Media;
