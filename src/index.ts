/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Constants } from "./constants";
import { handleRequest } from "./handler";

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		// Remove the "fx" from the url to make it a reddit.com link
		const handledResponse = await handleRequest(request.url.replace("fx", ""));

		return new Response(
			handledResponse +
				"<a href='http://localhost:8787/r/Damnthatsinteresting/comments/zazv2m/how_qantas_treats_your_baggage/'>test a reddit video link</a>",
			{
				headers: Constants.RESPONSE_HEADERS,
				status: 200,
			}
		);
	},
};
