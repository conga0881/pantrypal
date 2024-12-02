const recipes = [
    { name: 'Pancakes', ingredients: ['eggs', 'flour', 'milk', 'butter', 'sugar'] },
    { name: 'Omelette', ingredients: ['eggs', 'milk', 'butter'] },
    { name: 'Chocolate Cake', ingredients: ['flour', 'butter', 'sugar', 'chocolate'] },
    { name: 'Vanilla Muffins', ingredients: ['flour', 'butter', 'sugar', 'vanilla'] }
];

function handleSearch() {
    const selectedIngredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    const searchQuery = document.getElementById('ingredient-search').value.trim().toLowerCase();

    let matchingRecipes = recipes.filter(recipe => {
        const recipeIngredientsMatch = selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
        const recipeNameMatch = recipe.name.toLowerCase().includes(searchQuery);
        return recipeIngredientsMatch && recipeNameMatch;
    });

    displayRecipes(matchingRecipes);
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('recipe-results');
    if (recipes.length > 0) {
        resultsDiv.innerHTML = recipes.map(recipe => {
            return `<a href="${recipe.name.toLowerCase().replace(/\s+/g, '-')}.html">${recipe.name}</a><br>`;
        }).join('');
    } else {
        resultsDiv.innerHTML = 'No recipes found.';
    }
}
