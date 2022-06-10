function getArticleGenerator(articles) {
    return function () {
        let contentBoxElement = document.getElementById('content');
        if (articles.length > 0)
        {
            let article = document.createElement('article');
            contentBoxElement.appendChild(article);
            article.textContent += articles.shift();
        }
    }
}
