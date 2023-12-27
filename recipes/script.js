document.addEventListener('DOMContentLoaded', function () {
  let toggleIngredientsBtn = document.getElementById('toggleIngredientsBtn');
  let ingredientsList = document.getElementById('ingredientsList');
  let toggleDirectionsBtn = document.getElementById('toggleDirectionsBtn');
  let directionList = document.getElementById('directionsList');

  toggleIngredientsBtn.addEventListener('click', function () {
    ingredientsList.style.display =
      ingredientsList.style.display === 'none' ? 'block' : 'none';
  });

  toggleDirectionsBtn.addEventListener('click', function () {
    directionList.style.display =
      directionList.style.display === 'none' ? 'block' : 'none';
  });
});
