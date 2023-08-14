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
const maxPage = 42;
let page = 1;
let searchQuery = "";

//let data;

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
  //console.log(data);
}

fetchCharacters();

//Task 3: Pagination
nextButton.addEventListener("click", () => {
  if (page < 42 && page >= 1) {
    page += 1;
    pagination.textContent = `${page}/${maxPage}`;
    fetchCharacters(page);
  }
});

prevButton.addEventListener("click", () => {
  if (page <= 42 && page > 1) {
    page -= 1;
    pagination.textContent = `${page}/${maxPage}`;
    fetchCharacters(page);
  }
});

//Task 4: The Search Bar
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target[0].value;
  // console.log("event.target[0].value: ", event.target[0].value);
  // console.log("event: ", event);
  fetchCharacters();
});
