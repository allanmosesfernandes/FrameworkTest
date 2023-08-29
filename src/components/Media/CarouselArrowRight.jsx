import Arrow from "../../assets/images/homepage/Arrow.svg";

function CarouselArrowLeft() {
	return (
		<div className="w-[60px] h-[60px]  flex items-center justify-center absolute -bottom-[80px] left-20 bg-[#3C76B6]">
			<img src={Arrow} alt="Arrow" className="-rotate-90" />
		</div>
	);
}

export default CarouselArrowLeft;
