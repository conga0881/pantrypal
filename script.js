function handleSearch() {
    const selectedIngredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    const results = selectedIngredients.length ? 
        `Recipes for: ${selectedIngredients.join(', ')}` : 
        "Please select some ingredients.";

    document.getElementById('recipe-results').innerHTML = results;
}

