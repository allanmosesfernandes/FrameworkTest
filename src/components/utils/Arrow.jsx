import ArrowSVG from "../../assets/images/homepage/Arrow.svg";

function Arrow(props) {
  return (
    <div
      className="z-1 absolute bottom-10 left-[50%] w-[36px] h-[36px] border-white border-2 rounded-full flex justify-center items-center mx-auto"
      onClick={props.onClick}
    >
      <img src={ArrowSVG} alt="Arrow" />
    </div>
  );
}

export default Arrow;
