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
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  console.log("data: ", data);
  const allCharacters = data.results;
  allCharacters.forEach((character) => {
    const newCharacterCard = createCharacterCard(character);
    cardContainer.append(newCharacterCard);
  });
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  if (page <= 42) {
    page += 1;
    fetchCharacters();
    pagination.textContent = `${page} / 42`;
    //console.log("page: ", page);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    pagination.textContent = `${page} / 42`;
    fetchCharacters();
  }
});
