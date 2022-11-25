// Handles the Reddit request

export const handleRequest = () => {
	console.log("Handling request");

	const metaTags = [];

	// Add metadata relating to the author and body text.
	metaTags.push(`<meta property="og:description" content="hi guys" />`);

	return metaTags.join("");
};
