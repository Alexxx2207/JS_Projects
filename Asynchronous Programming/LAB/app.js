window.addEventListener('load', async () => {

    const BASE_URL = 'http://localhost:3030/';
    const MAIN_ELEMENT = document.querySelector('main');

    MAIN_ELEMENT.innerHTML = '';

    let recipeWidgets = [];

    let recipes = await GetRecipes();

    recipes.forEach((recipe, index) => {
        recipeWidgets[index] = renderRecipeWidget(recipe);
    });

    recipeWidgets.forEach(widget => {
        MAIN_ELEMENT.append(widget);
    });

    async function GetRecipes() {
        let response = await fetch(BASE_URL + 'jsonstore/cookbook/recipes');

        let data = await response.json();

        return Object.values(data);
    }

    function renderRecipeWidget(data) {
        let article = document.createElement('article');
        article.classList.add('preview');

        article.innerHTML = `
        <div class="title">
            <h2>${data.name}</h2>
        </div>
        <div class="small">
            <img src="${data.img}">
        </div>`;

        article.addEventListener('click', GetRecipeDetails.bind(GetRecipeDetails, data._id));

        return article;
    }

    async function GetRecipeDetails(id) {
        let response = await fetch(BASE_URL + `jsonstore/cookbook/details/${id}`);

        let data = await response.json();

        let article = document.createElement('article');

        article.innerHTML = `
        <h2>${data.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src="${data.img}">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                ${data.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${data.steps.map(step => `<p>${step}</p>`).join('')}
        </div>`;

        recipeWidgets.splice(Number(id) - 1, 1, article);

        MAIN_ELEMENT.innerHTML = '';

        recipeWidgets.forEach(widget => {
            MAIN_ELEMENT.append(widget);
        });
    }
});

