interface Comment {
    id: number;
    body: string;
}

interface CustomPost {
    id: number;
    title: string;
    body: string;
    comments: Comment[];
}

async function comment_fetcher(commentId: number): Promise<Comment[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}/comments`);
    const data = await response.json();
    return data.map((c: any) => ({ id: c.id, body: c.body }));
}

async function post_fetcher(postId: number): Promise<CustomPost> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();

    const comments = await comment_fetcher(postId);

    return {
        id: post.id,
        title: post.title,
        body: post.body,
        comments
    };
}

async function main() {
    const hydratedPost = await post_fetcher(1);

    console.log(`title: ${hydratedPost.title}`);
    console.log(`body: ${hydratedPost.body}`);
    console.log(`comments:`);
    hydratedPost.comments.forEach((comment, index) => {
        console.log(`  comment ${index + 1}: ${comment.body}`);
    });
}

main();