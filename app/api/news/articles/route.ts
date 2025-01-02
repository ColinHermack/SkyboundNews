import { ArticleMetadata, getPaginatedArticleMetadata } from "@/articles/utils";

export function GET(request: Request): Response {
    try {
        if (request.headers.get("page") === null) {
            return new Response('Error: No page provided', {status: 400});
        } else if (typeof request.headers.get("page") !== "string") {
            return new Response('Error: Page is not a string', {status: 400});
        } else {
            console.log(getPaginatedArticleMetadata(parseInt(request.headers.get("page")!)));
            return new Response(JSON.stringify(getPaginatedArticleMetadata(parseInt(request.headers.get("page")!))), {status: 200});
        }
    } catch (error) {
        return new Response('Error', {status: 500});
    }
}