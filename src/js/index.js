const diceIcon = document.querySelector(".icon");
diceIcon.addEventListener("click", generateAdvice);

async function generateAdvice() {

    clickAnimation();

    const url = "https://api.adviceslip.com/advice";
    const resultado = await fetch(url);
    const adviceContent = await resultado.json();

    const adviceId = adviceContent.slip.id;
    const adviceDescription = adviceContent.slip.advice;

    const adviceDescriptionPT = await translate(adviceDescription);

    document.querySelector(".card .id").remove();
    document.querySelector(".card .quote").remove();

    const $newId = document.createElement("p");
    const $newQuote = document.createElement("strong");

    $newId.innerHTML = `Conselho #${adviceId}`;
    $newQuote.innerHTML = adviceDescriptionPT;

    $newId.classList.add("id");
    $newQuote.classList.add("quote");

    document.querySelector(".card").appendChild($newId);
    document.querySelector(".card").appendChild($newQuote);

    hideDividerBigQuote()
}

async function translate(value) {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "5bc6f4fdfdmsh4f2174a64203595p1c69a6jsn1054a151b5a0",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: "en",
        target_language: "pt",
        text: value,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const translatedText = result.data.translatedText;

      return translatedText;

    } catch (error) {
      console.error(error);
  }
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