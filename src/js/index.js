const diceIcon = document.querySelector(".icon");
diceIcon.addEventListener("click", generateAdvice);

async function generateAdvice() {

    clickAnimation();

    const url = "https://api.adviceslip.com/advice";
    const result = await fetch(url);
    const adviceContent = await result.json();

    const adviceId = adviceContent.slip.id;
    const adviceDescription = adviceContent.slip.advice;


    document.querySelector(".card .id").remove();
    document.querySelector(".card .quote").remove();

    const $newId = document.createElement("p");
    const $newQuote = document.createElement("strong");

    $newId.innerHTML = `Advice #${adviceId}`;
    $newQuote.innerHTML = adviceDescription;

    $newId.classList.add("id");
    $newQuote.classList.add("quote");

    document.querySelector(".card").appendChild($newId);
    document.querySelector(".card").appendChild($newQuote);

    hideDividerBigQuote()
}

function hideDividerBigQuote() {

    const quote = document.querySelector(".quote")

    if(quote.clientHeight > 240) {
        quote.classList.add("big")
    }
}


function clickAnimation() {

    const dice = document.querySelector(".icon .dice");

    if (dice.classList.contains("roll")) {
      dice.classList.remove("roll");
      dice.offsetWidth;
      dice.classList.add("roll");
    } else {
      dice.classList.add("roll");
    }
}