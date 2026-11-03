const postListContainer = document.getElementById("postList");
const fetchPostsButton = document.getElementById("fetchButton");

const newPostForm = document.getElementById("postForm");

fetchPostsButton.addEventListener("click", getPosts);

newPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    postPost();
});

// Fetch posts taken from https://jsonplaceholder.typicode.com/posts
// and insert them in a <div> with id=postList
async function getPosts() {
    // Fetch the response
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convert to json
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

    // Put the list in the proper div
    postListContainer.appendChild(postList);
}

// Send a post to https://jsonplaceholder.typicode.com/posts
async function postPost() {
    const newPostTitle = document.getElementById("titleInput").value;
    const newPostBody = document.getElementById("bodyInput").value;

    const postData = {
        title: newPostTitle,
        body: newPostBody,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });

    console.log(response);
}
