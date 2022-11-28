// Handles the URL request, returning meta tags HTML for our embedding.

import { redditFetch } from "./fetch";

export const handleRequest = async (url: string) => {
	console.log("Handling request");

	const data = await redditFetch(url);

	const metaTags = [];

	// Add metadata relating to the author and body text.
	metaTags.push(`<meta property="og:description" content="Hello World" />`);

	// TODO: parse the fetched data and turn it into meta tags.

	return metaTags.join("");
};
