//getPosts();

// taken from https://jsonplaceholder.typicode.com/posts
async function getPosts() {
    // Fetch
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convert
    let posts = await response.json();

    for (let post of posts) {
        // TODO: fff
    }
}