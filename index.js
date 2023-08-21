import createCharacterCard from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

//Fetch data from API and create character cards with forEach from character array
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

//Create navigation-pane elements with the respective create functions (createButton & createPagination) and append them to the navigation container
const prevButton = createButton("previous", "prev", () => {
  if (page > 1) {
    page -= 1;
    fetchCharacters();
  }
});
const pagination = createPagination();
const nextButton = createButton("next", "next", () => {
  if (page < maxPage) {
    page += 1;
    fetchCharacters();
  }
});
navigation.append(prevButton, pagination, nextButton);

//Create search-bar with the create-search-bar function and append it to the search-bar container
const searchBar = createSearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target[0].value;
  page = 1;
  fetchCharacters();
});
searchBarContainer.append(searchBar);
