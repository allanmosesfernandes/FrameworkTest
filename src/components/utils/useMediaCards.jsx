import axios from "axios";
import { useEffect, useState } from "react";
import MEDIA_CARDS_URL from "./constants";

const useMediaCards = (props) => {
	const [post, setPost] = useState(null);
	useEffect(() => {
		axios
			.get(MEDIA_CARDS_URL)
			.then((response) => {
				setPost(response.data);
			})
			.catch((error) => {
				console.error("There was an error fetching data", error);
			});
	}, []);
	return { post };
};

export default useMediaCards;
