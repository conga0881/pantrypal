document.getElementById('search-button').addEventListener('click', function() {
    console.log("Search button clicked."); // Debug message

    const selectedIngredients = Array.from(document.querySelectorAll('#ingredient-list option:checked'))
        .map(option => option.value.toLowerCase());
    console.log("Selected ingredients:", selectedIngredients); // Debug message

    const additionalIngredients = document.getElementById('additional-ingredients').value
        .split(',')
        .map(ingredient => ingredient.trim().toLowerCase())
        .filter(Boolean);
    console.log("Additional ingredients:", additionalIngredients); // Debug message

    const allIngredients = [...selectedIngredients, ...additionalIngredients];
    console.log("All ingredients:", allIngredients); // Debug message

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

    console.log("Recipes database loaded."); // Debug message

    const foundRecipes = Object.keys(recipes).filter(recipe => {
        const recipeIngredients = recipes[recipe];
        console.log(`Checking recipe: ${recipe}`, recipeIngredients); // Debug message
        return allIngredients.every(ingredient => recipeIngredients.includes(ingredient));
    });

    console.log("Found recipes:", foundRecipes); // Debug message

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
