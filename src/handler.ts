// Handles the URL request, returning meta tags HTML for our embedding.

import { redditFetch } from "./fetch";

async function createPostObject(dataRaw: PostRaw) {
	// Populates a final Post object with necessary data from the JSON fetched from Reddit.
	// TODO
}

export const handleRequest = async (url: string) => {
	console.log("Handling request");

	const data = await redditFetch(url);

	const metaTags = [""];

	// Add metadata relating to the author and body text.
	// TODO: parse the fetched data and turn it into meta tags.

	return metaTags.join("");
};
