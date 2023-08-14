import createCharacterCard from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const data = await response.json();
  const allCharacters = data.results;
  allCharacters.forEach((character) => {
    const newCharacter = createCharacterCard(character);
    cardContainer.append(newCharacter);
  });
}

fetchCharacters();
