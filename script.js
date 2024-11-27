const recipes = [
    {
        name: "Pancakes",
        ingredients: ["eggs", "flour", "milk", "butter", "sugar"],
        instructions: "Mix all ingredients together and cook on a skillet."
    },
    {
        name: "Cake",
        ingredients: ["eggs", "flour", "milk", "butter", "sugar"],
        instructions: "Bake in a preheated oven at 350°F for 30 minutes."
    },
    {
        name: "Omelette",
        ingredients: ["eggs", "butter"],
        instructions: "Whisk eggs, pour into a pan with butter, and cook until firm."
    }
];

function searchRecipes() {
    const selectedIngredients = Array.from(
        document.querySelectorAll('#ingredient-dropdown option:checked')
    ).map(option => option.value);

    const additionalInput = document.getElementById('additional-ingredients').value.trim();
    if (additionalInput) {
        selectedIngredients.push(...additionalInput.split(',').map(ing => ing.trim()));
    }

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.every(ingredient => selectedIngredients.includes(ingredient))
    );

    const resultsDiv = document.getElementById("recipe-results");
    resultsDiv.innerHTML = "";

    if (filteredRecipes.length > 0) {
        let resultHTML = "<h2>Recipes Found:</h2><ul>";
        filteredRecipes.forEach(recipe => {
            resultHTML += `<li><strong>${recipe.name}</strong>: ${recipe.instructions}</li>`;
        });
        resultHTML += "</ul>";
        resultsDiv.innerHTML = resultHTML;
    } else {
        resultsDiv.innerHTML = "<p>No recipes found with the selected ingredients.</p>";
    }
}
