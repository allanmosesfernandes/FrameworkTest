import useMediaCards from "./utils/useMediaCards";
import CardRibbonColors from "./utils/UtilityFunctions"; // Note: You imported this but didn't use it
import MediaCard from "./MediaCards";
import { Carousel } from "@trendyol-js/react-carousel";

function Media() {
	const { post } = useMediaCards();
	const category = "events"; // Note: You declared this but didn't use it

	return (
		<section className="media lg:px-10 px-4">
			<h2 className="font-sora text-white md:text-5xl text-3xl leading-63">
				Media
			</h2>
			{post ? (
				post.length ? (
					<Carousel show={2.5} slide={2} transition={0.5} swiping={true} className="mt-10">
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
