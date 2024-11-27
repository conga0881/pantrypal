document.getElementById('searchButton').addEventListener('click', function () {
    const selectedIngredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(option => option.value);

    const additionalIngredients = document.getElementById('additionalIngredients').value.split(',')
        .map(ingredient => ingredient.trim())
        .filter(Boolean);

    const allIngredients = selectedIngredients.concat(additionalIngredients);

    const recipes = [
        { name: 'Pancakes', ingredients: ['eggs', 'flour', 'milk'] },
        { name: 'Cake', ingredients: ['flour', 'sugar', 'butter'] },
        { name: 'Omelette', ingredients: ['eggs', 'butter'] }
    ];

    const foundRecipes = recipes.filter(recipe => 
        recipe.ingredients.every(ingredient => allIngredients.includes(ingredient))
    );

    const recipeList = document.getElementById('recipes');
    recipeList.innerHTML = '';

    if (foundRecipes.length > 0) {
        foundRecipes.forEach(recipe => {
            const listItem = document.createElement('li');
            listItem.textContent = `${recipe.name}: Ingredients - ${recipe.ingredients.join(', ')}`;
            recipeList.appendChild(listItem);
        });
    } else {
        const noResults = document.createElement('li');
        noResults.textContent = 'No recipes found. Try adding more ingredients!';
        recipeList.appendChild(noResults);
    }
});
