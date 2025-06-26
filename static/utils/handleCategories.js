import { loadCards } from './loadCards.js';

import { Card } from '../js/modules/card.js';

export function searchByName(name, gameList, cardContainer) {
  const newGameList = gameList.filter((game) =>
    game.title.toLowerCase().includes(name)
  );

  cardContainer.replaceChildren();

  loadCards(newGameList, cardContainer, Card);

  showClearButton();
}

function searchByCategory(gameList, category) {
  const cardContainer = document.querySelector('#cardContainer');

  const newGameList = gameList.filter((game) =>
    game.categories.includes(category)
  );

  cardContainer.replaceChildren();

  loadCards(newGameList, cardContainer, Card);
}

export function clearCategories(gameList, cardContainer) {
  const clearCategoriesButton = document.querySelector(
    '#clearCategoriesButton'
  );

  const searchInput = document.querySelector('#searchInput');

  clearCategoriesButton.addEventListener('click', function () {
    cardContainer.replaceChildren();

    loadCards(gameList, cardContainer, Card);

    clearCategoriesButton.classList.replace('visible', 'invisible');
    clearCategoriesButton.classList.replace('opacity-100', 'opacity-0');

    searchInput.value = '';
  });
}

function showClearButton() {
  const clearCategoriesButton = document.querySelector(
    '#clearCategoriesButton'
  );

  clearCategoriesButton.classList.replace('invisible', 'visible');
  clearCategoriesButton.classList.replace('opacity-0', 'opacity-100');
}

export function showCategoriesContainer(categoriesButton, categoriesContainer) {
  categoriesButton.addEventListener('click', function () {
    if (categoriesContainer.classList.contains('invisible')) {
      categoriesContainer.classList.replace('invisible', 'visible');
      categoriesContainer.classList.replace('opacity-0', 'opacity-100');
    } else {
      categoriesContainer.classList.replace('visible', 'invisible');
      categoriesContainer.classList.replace('opacity-100', 'opacity-0');
    }
  });
}

export function loadCategories(gameList, categoriesContainer) {
  const categoriesArray = gameList.map((game) => {
    return game.categories;
  });

  const sortedCategories = categoriesArray
    .flat()
    .sort((a, b) => a.localeCompare(b));

  const categories = sortedCategories.filter((category, index) => {
    if (category !== sortedCategories[index - 1]) return category;
  });

  categories.forEach((category) => {
    const li = document.createElement('li');
    categoriesContainer.appendChild(li);

    const button = document.createElement('button');
    li.appendChild(button);
    button.innerText = `${category}`;
    button.classList =
      'm-3 ease-in-out transition-all duration-500 bg-green-900 hover:bg-green-700 rounded p-2';

    button.addEventListener('click', function () {
      searchByCategory(gameList, category);
      categoriesContainer.classList.replace('visible', 'invisible');
      categoriesContainer.classList.replace('opacity-100', 'opacity-0');

      showClearButton();
    });
  });
}
