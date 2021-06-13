fetch("https://surfuphack-api.herokuapp.com/listing?symbol=BTC")
   .then(response => response.json())
   .then(characters => showCharacters(characters.name));
showCharacters = characters => {
  const charactersDiv = document.querySelector("#rick-and-morty-characters");
  characters.forEach(character => {
    const characterElement = document.createElement("li");
    characterElement.innerText = `Character Name: ${character.name.cryptoData.BTC.name}`;
    charactersDiv.append(characterElement);
console.log(characterElement.innerText);
  });
}