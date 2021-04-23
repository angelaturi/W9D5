const partyHeader = document.getElementById("party");

export const htmlGenerator = (string, htmlElement) => {
  let pTag = document.createElement("p");
  pTag.textContent = string;
  if (htmlElement.hasChildNodes()) {
    htmlElement.childNodes.forEach(ele => {
      htmlElement.removeChild(ele);
    });
  }
  htmlElement.appendChild(pTag);
};

htmlGenerator("Party Time.", partyHeader);
