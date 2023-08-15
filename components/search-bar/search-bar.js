export function createSearchBar() {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("action", "");
  searchBar.setAttribute("data-js", "search-bar");

  //Create and append search-bar input element to search bar
  const searchBarInput = document.createElement("input");
  searchBarInput.name = "query";
  searchBarInput.classList.add("search-bar__input");
  searchBarInput.type = "text";
  searchBarInput.placeholder = "search characters";
  searchBarInput.ariaLabel = "character name";
  searchBar.append(searchBarInput);

  //Create and append search-bar button to search bar
  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("search-bar__button");
  searchBarButton.ariaLabel = "search for character";
  searchBar.append(searchBarButton);

  //Create and append button-icon to button
  const searchBarIcon = document.createElement("img");
  searchBarIcon.classList.add("search-bar__icon");
  searchBarIcon.setAttribute("src", "assets/magnifying-glass.png");
  searchBarIcon.setAttribute("alt", "");
  searchBarButton.append(searchBarIcon);

  return searchBar;
}
