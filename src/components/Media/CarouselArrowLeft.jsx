import Arrow from "../../assets/images/homepage/Arrow.svg";

function CarouselArrowLeft() {
	return (
		<div className="w-[60px] h-[60px] border-[1px] border-white flex items-center justify-center absolute -bottom-[80px] left-0 cursor-pointer">
			<img src={Arrow} alt="Arrow" className="rotate-90" />
		</div>
	);
}

export default CarouselArrowLeft;