const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output +=  `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// without callback post three will not show in the html because 2000 > 1000
// getPosts();
// createPost({title: 'post three', body:'This is post three'});

createPost({title: 'post three', body:'This is post three'}, getPosts);