

/////////////////////// Solution Without The Sugar Syntax -> Async/Await ///////////////////////
function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', function () {
        loadPosts();
    });
    document.getElementById('btnViewPost').addEventListener('click', function () {
        loadSpecificPost();
        loadComments();
    });

    function loadPosts() {
        fetch(`http://localhost:3030/jsonstore/blog/posts`)
            .then(res => res.json())
            .then(data => renderPosts(data));
    }

    function loadSpecificPost() {
        let select = document.getElementById('posts');

        fetch(`http://localhost:3030/jsonstore/blog/posts/${select.value}`)
            .then(res => res.json())
            .then(data => renderSpecificPost(data));
    }

    function loadComments() {
        fetch(`http://localhost:3030/jsonstore/blog/comments`)
            .then(res => res.json())
            .then(data => renderComments(Object.values(data)));
    }

    function renderPosts(blogs) {
        let select = document.getElementById('posts');

        select.innerHTML = '';

        Object.entries(blogs).forEach(blog => {
            let option = document.createElement('option');

            option.value = blog[0];
            option.textContent = blog[1].title.toUpperCase();

            select.appendChild(option);
        });
    }

    function renderSpecificPost(blog) {
        document.getElementById('post-title').textContent = blog.title;
        document.getElementById('post-body').textContent = blog.body;
    }

    function renderComments(comments) {
        let select = document.getElementById('posts');

        comments = comments.filter(c => c.postId == select.value);

        let ul = document.getElementById('post-comments');
        ul.innerHTML = '';

        comments.forEach(c => {
            let li = document.createElement('li');
            li.textContent = c.text;
            ul.appendChild(li);
        });
    }
}

/////////////////////// Solution With Async/Await ///////////////////////

function attachEvents2() {
    document.getElementById('btnLoadPosts').addEventListener('click', function () {
        loadPosts();
    });
    document.getElementById('btnViewPost').addEventListener('click', function () {
        loadSpecificPost();
        loadComments();
    });

    async function loadPosts() {
        let blogs = await fetch(`http://localhost:3030/jsonstore/blog/posts`)
            .then(res => res.json())

        let select = document.getElementById('posts');

        select.innerHTML = '';

        Object.entries(blogs).forEach(blog => {
            let option = document.createElement('option');

            option.value = blog[0];
            option.textContent = blog[1].title.toUpperCase();

            select.appendChild(option);
        });
    }

    async function loadSpecificPost() {
        let select = document.getElementById('posts');

        let blog = await fetch(`http://localhost:3030/jsonstore/blog/posts/${select.value}`)
            .then(res => res.json());

        document.getElementById('post-title').textContent = blog.title;
        document.getElementById('post-body').textContent = blog.body;
    }

    async function loadComments() {
        let comments = Object.values(await fetch(`http://localhost:3030/jsonstore/blog/comments`)
            .then(res => res.json()));

        let select = document.getElementById('posts');

        comments = comments.filter(c => c.postId == select.value);

        let ul = document.getElementById('post-comments');
        ul.innerHTML = '';

        comments.forEach(c => {
            let li = document.createElement('li');
            li.textContent = c.text;
            ul.appendChild(li);
        });
    }
}


//attachEvents();
attachEvents2();