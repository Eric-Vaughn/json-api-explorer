const postListContainer = document.getElementById("postList");

getPosts();

// taken from https://jsonplaceholder.typicode.com/posts
async function getPosts() {
    // Fetch
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convert
    let posts = await response.json();

    // Make unordered list
    const postList = document.createElement("ul");

    // Append every post to the unordered list
    for (let post of posts) {
        // Create the list item
        const listItem = document.createElement("li");

        // Get the list item's contents
        const postTitle = document.createElement("h3");
        const postBody = document.createElement("p");

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        // Set the list item's content
        listItem.appendChild(postTitle);
        listItem.appendChild(postBody);

        // Add the item to the list
        postList.appendChild(listItem);
    }
}