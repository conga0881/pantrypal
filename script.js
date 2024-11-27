document.getElementById('search-button').addEventListener('click', function() {
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredient-list option:checked'))
        .map(option => option.value.toLowerCase());
    const additionalIngredients = document.getElementById('additional-ingredients').value
        .split(',')
        .map(ingredient => ingredient.trim().toLowerCase())
        .filter(Boolean);

    const allIngredients = [...selectedIngredients, ...additionalIngredients];

    if (allIngredients.length === 0) {
        alert("Please select or enter at least one ingredient.");
        return;
    }

    // Mock recipe database
    const recipes = {
        "Pancakes": ["eggs", "flour", "milk"],
        "Omelette": ["eggs", "butter", "cheese"],
        "Cake": ["flour", "sugar", "butter", "eggs"],
        "Tomato Soup": ["tomato", "onion", "butter"]
    };

    const foundRecipes = Object.keys(recipes).filter(recipe => {
        const recipeIngredients = recipes[recipe];
        return allIngredients.every(ingredient => recipeIngredients.includes(ingredient));
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = "";

    if (foundRecipes.length > 0) {
        foundRecipes.forEach(recipe => {
            const recipeLink = document.createElement('a');
            recipeLink.href = `${recipe.toLowerCase().replace(/ /g, '-')}.html`;
            recipeLink.textContent = recipe;
            resultsContainer.appendChild(recipeLink);
        });
    } else {
        resultsContainer.textContent = "No recipes found.";
    }
});
