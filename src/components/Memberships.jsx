import Marquee from "react-fast-marquee";
import samsung from "../assets/images/logos/samsung.svg";
import tesla from "../assets/images/logos/tesla.svg";
import apple from "../assets/images/logos/apple.svg";

function Memberships() {
	return (
		<section className="flex flex-col items-center my-10">
			<p className="spacedText uppercase my-10">Memberships</p>
			<Marquee pauseOnHover speed={30} autoFill>
				<img
					src={samsung}
					alt="Samsung"
					title="samsung"
					className="h-[120px] w-[50px] mx-10"
				/>
				<img
					src={tesla}
					alt="Tesla"
					title="Tesla"
					className="h-[120px] w-[50px] mx-10"
				/>
				<img
					src={apple}
					alt="Apple INC"
					title="Apple INC"
					className="h-[120px] w-[50px] mx-10"
				/>
			</Marquee>
		</section>
	);
}

export default Memberships;
