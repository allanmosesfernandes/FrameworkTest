import { useState } from "react";
import useMediaCards from "../utils/useMediaCards";
import MediaCard from "./MediaCards";
import { Carousel } from "@trendyol-js/react-carousel";
import Arrow from "../utils/Arrow";
import Button from "../utils/Button";
import CarouselArrowLeft from "./CarouselArrowLeft";
import CarouselArrowRight from "./CarouselArrowRight";

function Media() {
	const { post } = useMediaCards();
	const [mobile, setMobile] = useState(window.innerWidth < 768);
	window.addEventListener("resize", () => {
		setMobile(window.innerWidth < 768);
	});
	const category = "events"; // Note: You declared this but didn't use it
	const rightArr = () => {
		return <h2>right</h2>;
	};
	return (
		<section className="media lg:px-10 px-4">
			<h2 className="font-sora text-white md:text-5xl text-3xl leading-63">
				Media
			</h2>
			{post ? (
				post.length ? (
					<Carousel
						show={mobile ? 1 : 3.5}
						slide={mobile? 1: 3}
						transition={0.5}
						swiping={true}
						responsive={true}
						className="md:mt-10 mt-5 relative mb-[10rem]"
						rightArrow={<CarouselArrowRight />}
						leftArrow={<CarouselArrowLeft />}
						useArrowKeys={true}
						dynamic={true}
					>
						{post.map((postItem, index) => (
							<MediaCard key={index} post={postItem} />
						))}
					</Carousel>
				) : (
					"No posts found"
				)
			) : (
				"Loading..."
			)}
		</section>
	);
}

export default Media;
