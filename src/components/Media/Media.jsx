import React, { useState, useEffect } from "react";
import useMediaCards from "../utils/useMediaCards";
import MediaCard from "./MediaCards";
import { Carousel } from "@trendyol-js/react-carousel";
import CarouselArrowLeft from "./CarouselArrowLeft";
import CarouselArrowRight from "./CarouselArrowRight";

function Media() {
	const { post } = useMediaCards();
	const [showCount, setShowCount] = useState(3.5);
	const [slideCount, setSlideCount] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setShowCount(1);
				setSlideCount(1);
			} else if (width < 1280) {
				setShowCount(2);
				setSlideCount(2);
			} else {
				setShowCount(3.5);
				setSlideCount(3);
			}
		};

		// Initial setup
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section className="md:mt-[64px] lg:px-10 px-4">
			<h2 className="font-sora text-white md:text-5xl text-3xl leading-63">
				Media
			</h2>
			{post ? (
				post.length ? (
					<Carousel
						show={showCount}
						slide={slideCount}
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
