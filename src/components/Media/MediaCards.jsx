import { cardRibbonColors, formatDate } from "../utils/utilityFunctions";
import YellowArrow from "../../assets/images/arrowYellow.svg";

function MediaCard(props) {
	const { post } = props;
	const { acf } = post;
	const { post_date, card_description, card_title, card_type } = acf;
	const background_image = post?.yoast_head_json?.og_image?.[0]?.url;
	return (
		<div className="group overflow-hidden relative h-[573px] p-6 md:mr-6 mr-0 cursor-pointer flex flex-col justify-between">
			<div
				className="absolute inset-0 bg-cover group-hover:scale-110 ease-linear duration-300 z-1 w-full "
				style={{
					backgroundImage: `url(${background_image})`,
					zIndex: -1,
				}}
			></div>
			{/* Card Ribbon */}
			<div
				className="card-category font-bold text-xs uppercase mt-2 leading-[14.75px] tracking-[3.60px] text-white w-fit p-2 rounded-full"
				style={{ backgroundColor: cardRibbonColors(card_type) }}
			>
				{card_type}
			</div>

			{/* Card Body */}
			<div className="flex flex-col text-white">
				{/* Date */}
				<p className="font-medium tracking-[4.2px] leading-[17px] text-sm">
					{formatDate(post_date)}
				</p>
				<p className="leading-[29px] text-2xl mt-[10px] mb-[20px]">
					{card_title}
				</p>
				<p className="text-base leading-30 opacity-60">{card_description}</p>
				<p className="flex items-center gap-2 leading-[17px] text-sm font-medium uppercase tracking-[4.2px] mt-[70px]">
					Read More
					<span>
						<img src={YellowArrow} alt="Yellow Arrow" />
					</span>
				</p>
			</div>
		</div>
	);
}

export default MediaCard;