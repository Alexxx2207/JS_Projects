import authenticationTokenKey from "./constants.js";

function getRecipeFormDataInput() {
    let formElement = document.querySelector('form');

    let formData = new FormData(formElement);

    return {
        name: formData.get('name'),
        image: formData.get('img'),
        ingredients: formData.get('ingredients'),
        preparation: formData.get('steps')
    };
}

function mapRecipeInputToRecipeDBModel(recipeInput) {
    recipeInput.ingredients = recipeInput.ingredients.split('\n');
    recipeInput.steps = recipeInput.preparation.split('\n');

    delete recipeInput.preparation;

    return recipeInput;
}

async function AddRecipe(recipe) {
    await fetch('http://localhost:3030/data/recipes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem(authenticationTokenKey)
        },
        body: JSON.stringify(recipe)
    });
}

document.querySelector('input[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault()

    let recipeInput = getRecipeFormDataInput();

    recipeInput = mapRecipeInputToRecipeDBModel(recipeInput);

    AddRecipe(recipeInput);

    window.location.href = 'index.html';
});

