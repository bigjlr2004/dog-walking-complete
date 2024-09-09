import { getWalkers } from "./database.js";

const walkers = getWalkers();

document.addEventListener("click", (evt) => {
  const clicked = evt.target;

  if (clicked.dataset.type === "city") {
    window.alert(`${clicked.dataset.name} works in ${clicked.dataset.city}.`);
  }
});

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    citiesHTML += `<li data-id="${walker.id}"
                    data-type="city"
                  data-name="${walker.name}"
                  data-city="${walker.city}"
    >${walker.city}</li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};
