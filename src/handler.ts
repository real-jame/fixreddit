// Handles the URL request, returning meta tags HTML for our embedding.

import { PostRaw, Post, Video } from "./types";
import { redditFetch } from "./fetch";

function createPostObject(rawPost: PostRaw) {
	// Populates a final Post object with necessary data from the JSON fetched from Reddit.
	const finalPost: Post = {...rawPost, upvotes: rawPost.ups, downvotes: rawPost.downs, created_at: rawPost.created, media: {}}
	if (rawPost.media?.reddit_video) {
		const video = rawPost.media.reddit_video;
		finalPost.media.video = {
			type: video.is_gif ? "gif" : "video",
			url: "TODO",
			thumbnail_url: "TODO",
			width: video.width,
			height: video.height,
			format: "TODO",
			duration: 0
		} as Video;
		// TODO: video
	}

	return finalPost;
}

export const handleRequest = async (url: string) => {
	console.log("Handling request");

	const data = await redditFetch(url);
	const finalPost = createPostObject(data);

	const metaTags = [""];

	// Add metadata relating to the author and body text.
	// TODO: parse the fetched data and turn it into meta tags.
	

	return metaTags.join("");
};
