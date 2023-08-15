import createCharacterCard from "./components/card/card.js";
import {
  createNextButton,
  createPrevButton,
} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

// const searchBar = document.querySelector('[data-js="search-bar"]');

const navigation = document.querySelector('[data-js="navigation"]');

// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();

  const allCharacters = data.results;
  allCharacters.forEach((character) => {
    const newCharacterCard = createCharacterCard(character);
    cardContainer.append(newCharacterCard);
  });
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

//Create navigation-pane elements with the respective create functions and append them to the navigation container
const prevButton = createPrevButton();
const pagination = createPagination();
const nextButton = createNextButton();
navigation.append(prevButton, pagination, nextButton);

//Create search-bar with the create function and append it to the search-bar container
const searchBar = createSearchBar();
searchBarContainer.append(searchBar);

//Add event listeners to next- and prev-button
nextButton.addEventListener("click", () => {
  if (page <= maxPage) {
    page += 1;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters();
  }
});

//Add functionality to search bar
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target[0].value;
  page = 1;
  fetchCharacters();
});
