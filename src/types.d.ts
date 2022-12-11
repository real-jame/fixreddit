type VideoRaw = {
	bitrate_kbps: number;
	dash_url: string;
	hls_url: string;
	fallback_url: string;
	width: number;
	height: number;
	is_gif: boolean;
};

type PostRaw = {
	subreddit: string;
	permalink: string; // slug
	title: string;
	selftext?: string; // body text

	ups: number; // upvotes
	downs: number; // downvotes

	created: number; // creation date in unix timestamp

	author: string;
	gildings: { [key: string]: number };

	media?: {
		reddit_video?: VideoRaw;
	};
};

// TODO: photo

type Video = {
	type: "video" | "gif";
	url: string;
	thumbnail_url: string;
	width: number;
	height: number;
	format: string;
	duration: number;
};

type Post = {
	subreddit: string;
	url: string;
	title: string;
	body_text?: string;
	created_at: string;

	upvotes: number;
	downvotes: number;
	replies: number;

	author: string;
	award_count: number;

	media: {
		video?: Video;
	};
};
