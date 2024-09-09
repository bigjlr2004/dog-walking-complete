import { getPets, getWalkers } from "./database.js";

const pets = getPets();
const walkers = getWalkers();

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;

  if (whatWasClickedOn.dataset.walkerforeignkey) {
    for (const walker of walkers) {
      if (walker.id === parseInt(whatWasClickedOn.dataset.walkerforeignkey)) {
        window.alert(`This dog is being walked by ${walker.name}.`);
      }
    }
  }
});

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li data-id="${pet.id}"
                        data-walkerforeignkey="${pet.walkerId}" >
                        ${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};
