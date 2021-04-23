const dropDownNav = document.querySelector(".drop-down-dog-nav");
export const dogs = {
  Corgi: "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  Affenpinscher: "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier":
    "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  Tosa: "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/",
};

export function dogLinkCreator() {
  let aTag = [];
  Object.keys(dogs).forEach(dog => {
    let tag = document.createElement("a");
    tag.textContent = dog;
    tag.setAttribute("href", dogs[dog]);
    let liTag = document.createElement("li");
    liTag.append(tag);
    liTag.classList.add("dog-link");
    aTag.push(liTag);
  });
  return aTag;
}

export function attachDogLinks() {
  let dogLink = dogLinkCreator();
  // debugger;
  dogLink.forEach(li => {
    let dropdown = document.getElementsByClassName("drop-down-dog-list");
    dropdown[0].appendChild(li);
  });
}

attachDogLinks();

function handleEnter() {
  const dropdown = document.querySelectorAll(".dog-link");
  dropdown.forEach(child => {
    child.classList.add("open");
  });
}

function handleLeave() {
  const dropdown = document.querySelectorAll(".dog-link");
  dropdown.forEach(child => {
    child.classList.remove("open");
  });
}

let DropDownNav = document.getElementsByClassName("drop-down-dog-nav");

DropDownNav[0].addEventListener('mouseenter', handleEnter);
DropDownNav[0].addEventListener('mouseleave', handleLeave);

// module.exports = {
//   attachDogLinks: attachDogLinks,
// };

// ES7 Way //
// export on objects of function that you want to export.
