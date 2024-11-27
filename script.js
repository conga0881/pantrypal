// Toggle the visibility of the ingredient dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('ingredient-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Gather selected ingredients and additional ingredients, then search for recipes
function searchRecipes() {
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredient-dropdown input:checked'))
        .map(input => input.value);
    
    const additionalIngredients = document.getElementById('additional-ingredients').value
        .split(',')
        .map(ingredient => ingredient.trim())
        .filter(Boolean);

    const allIngredients = selectedIngredients.concat(additionalIngredients);

    displayRecipes(allIngredients);
}

// Example recipes data
const recipes = [
    { name: 'Pancakes', ingredients: ['eggs', 'flour', 'milk', 'butter', 'sugar'], steps: 'Mix all ingredients and cook on a skillet.' },
    { name: 'Cake', ingredients: ['flour', 'sugar', 'eggs', 'butter', 'baking powder'], steps: 'Bake at 350°F for 30 minutes.' },
    { name: 'Omelette', ingredients: ['eggs', 'butter', 'salt'], steps: 'Whisk eggs, cook with butter, and season with salt.' },
    { name: 'Chocolate Chip Cookies', ingredients: ['flour', 'sugar', 'butter', 'chocolate', 'vanilla'], steps: 'Bake at 375°F for 10 minutes.' },
    { name: 'Bread', ingredients: ['flour', 'yeast', 'salt', 'water'], steps: 'Knead dough, let rise, and bake at 400°F for 25 minutes.' }
];

// Display matching recipes
function displayRecipes(ingredients) {
    const recipeResults = document.getElementById('recipe-results');
    recipeResults.innerHTML = '';

    if (ingredients.length === 0) {
        recipeResults.innerHTML = '<p>Please select or enter ingredients to search for recipes.</p>';
        return;
    }

    const matchingRecipes = recipes.filter(recipe =>
        ingredients.every(ing => recipe.ingredients.includes(ing))
    );

    if (matchingRecipes.length > 0) {
        recipeResults.innerHTML = '<h2>Recipes Found:</h2><ul>' + 
            matchingRecipes.map(recipe => `<li><strong>${recipe.name}:</strong> ${recipe.steps}</li>`).join('') + 
            '</ul>';
    } else {
        recipeResults.innerHTML = '<p>No matching recipes found. Try different ingredients!</p>';
    }
}
