// Fetches data about the URL from Reddit, and trims it down to only the data needed.
// TODO: attempt multiple times?

function generateSessionId() {
	const idLength = 16;
	return crypto.randomUUID().replace(/-/g, "").slice(0, idLength);
}

export const redditFetch = async (url: string) => {
	const slug = (url: string) => new URL(url).pathname.match(/[^V]+/g);
	const subdomain = ""; //TODO

	const headers = {
		Cookie: [
			`reddit_session=${generateSessionId()}`,
			`_options=%7B%22pref_quarantine_optin%22%3A%20true%7D`,
		],
	};

	const data = await fetch(`https://${subdomain}reddit.com/r/${slug}.json`, {
		method: "GET",
	});

	// TODO: parse reddit's data for just the parts what we need, and return that.
};
