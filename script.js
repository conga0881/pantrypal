const recipes = {
  Pancakes: {
    ingredients: ['Eggs', 'Flour', 'Milk'],
    url: 'pancakes.html'
  },
  Cake: {
    ingredients: ['Flour', 'Milk', 'Butter', 'Sugar'],
    url: 'cake.html'
  },
  Omelette: {
    ingredients: ['Eggs', 'Butter'],
    url: 'omelette.html'
  }
};

function handleSearch() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedIngredients = Array.from(checkboxes).map(cb => cb.value);

  const additionalInput = document.getElementById('additional-ingredients').value;
  if (additionalInput) {
    selectedIngredients.push(...additionalInput.split(',').map(item => item.trim()));
  }

  searchRecipes(selectedIngredients);
}

function searchRecipes(selectedIngredients) {
  const resultsDiv = document.getElementById('recipe-results');
  resultsDiv.innerHTML = '<h2>Recipes Found:</h2>';

  for (const [name, recipe] of Object.entries(recipes)) {
    const matches = recipe.ingredients.every(ingredient => selectedIngredients.includes(ingredient));
    if (matches) {
      const link = document.createElement('a');
      link.href = recipe.url;
      link.textContent = name;
      resultsDiv.appendChild(link);
      resultsDiv.appendChild(document.createElement('br'));
    }
  }
}
