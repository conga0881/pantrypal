function handleSearch() {
    const selectedIngredients = Array.from(document.getElementById('ingredient-select').selectedOptions)
        .map(option => option.value)
        .filter(Boolean);
    const additionalIngredients = document.getElementById('additional-ingredient').value.trim();
    const ingredients = [...selectedIngredients, ...additionalIngredients.split(',')].map(ing => ing.trim()).filter(Boolean);

    if (ingredients.length === 0) {
        alert('Please select or enter ingredients to search.');
        return;
    }

    const recipes = {
        Pancakes: ['eggs', 'flour', 'milk', 'butter', 'sugar'],
        Omelette: ['eggs', 'milk', 'cheese'],
        "Chocolate Cake": ['flour', 'sugar', 'eggs', 'butter', 'milk'],
    };

    const foundRecipes = Object.keys(recipes).filter(recipe =>
        recipes[recipe].every(ingredient => ingredients.includes(ingredient))
    );

    const resultsDiv = document.getElementById('recipe-results');
    resultsDiv.innerHTML = `<h2>Recipes for: ${ingredients.join(', ')}</h2>`;
    resultsDiv.innerHTML += foundRecipes.length
        ? foundRecipes.map(recipe => `<a href="${recipe.toLowerCase().replace(/\s+/g, '-')}.html">${recipe}</a>`).join('<br>')
        : '<p>No recipes found for the selected ingredients.</p>';
}
