async function generateAdvice() {

  const url = "https://api.adviceslip.com/advice";
  const resultado = await fetch(url);
  const adviceContent = await resultado.json();

  const adviceId = adviceContent.slip.id;
  const adviceDescription = adviceContent.slip.advice;

  document.querySelector(".card .id").remove()
  document.querySelector(".card .quote").remove()

  const $newId = document.createElement("p")
  const $newQuote = document.createElement("strong")

  $newId.innerHTML = `Advice #${adviceId}`
  $newQuote.innerHTML = adviceDescription

  $newId.classList.add("id");
  $newQuote.classList.add("quote")

  document.querySelector(".card").appendChild($newId)
  document.querySelector(".card").appendChild($newQuote)

}

const diceIcon = document.querySelector(".icon");

diceIcon.addEventListener("click", generateAdvice);