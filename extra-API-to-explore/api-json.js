// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(resp => resp.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users-list')
    for(const user of data){
        const userName = user.name
        const li = document.createElement('li')
        li.innerText = userName;
        ul.appendChild(li);
    }
}



function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postsDiv = document.getElementById('post-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>userId: ${post.id}</h3>
            <h4>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsDiv.appendChild(div);
    }
}

loadPosts()


function loadData(){
    console.log('hello');

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => displayPostsComments(data))
}

function displayPostsComments(commentsData){
    const commentDiv = document.getElementById('comment-container');
    for(const comment of commentsData){
        const newComment = document.createElement('div');
        newComment.classList.add('post')
        newComment.innerHTML = `
            <h2>${comment.id}</h2>
            <h3>${comment.name}</h3>
            <h3>${comment.email}</h3>
            <p>${comment.body}</>
        `
        commentDiv.appendChild(newComment);
    }
}

