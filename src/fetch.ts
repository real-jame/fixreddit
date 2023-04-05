// Fetches data about the URL from Reddit, and trims it down to only the data needed.
// TODO: attempt multiple times?

function generateSessionId() {
	const idLength = 16;
	return crypto.randomUUID().replace(/-/g, "").slice(0, idLength);
}

export const redditFetch = async (url: string) => {
	const slug = new URL(url).pathname.match(/[^V]+/g);
	// console.log("SLUG IS:", slug);

	const subdomain = "i."; //TODO

	const headers: { [header: string]: string } = {
		// yt-dlp uses these cookies so I'll use them as well to be safe
		Cookie: [
			`reddit_session=${generateSessionId()}`,
			`_options=%7B%22pref_quarantine_optin%22%3A%20true%7D`,
		].join("; "),
	};

	// console.log(`https://${subdomain}reddit.com${slug}.json`);

	const response = await fetch(`https://${subdomain}reddit.com${slug}.json`, {
		method: "GET",
		headers: headers,
	});
	const dataAll = await response.json();

	try {
		// TODO error checking
		// @ts-ignore
		const data = dataAll[0]["data"]["children"][0]["data"];
		console.log("Success!");
		console.log("DATA IS", data);

		return data;
	} catch (error) {
		console.log("Failed! ", error);
	}

	// TODO: parse reddit's data for just the parts what we need, and return that.
};
