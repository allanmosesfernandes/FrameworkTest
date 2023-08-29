/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import MEDIA_CARDS_URL from "./Constants";

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
