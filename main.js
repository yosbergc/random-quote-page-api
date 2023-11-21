const nameElement = document.querySelector('.name');
const quote = document.querySelector('.quote');
const categoryOne = document.querySelector('.one');
const categoryTwo = document.querySelector('.two');
const changePhraseButton = document.querySelector('.changePhrase');
const copyQuote = document.querySelector('.copyLink');
copyQuote.addEventListener('click', getQuoteToClipBoard)
window.addEventListener('load', searchQuote);
changePhraseButton.addEventListener('click', searchQuote);

async function getQuoteToClipBoard() {
    try {
        await navigator.clipboard.writeText(quote.innerHTML);
        console.log('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

function searchQuote() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    nameElement.innerHTML = data.author;
    quote.innerHTML = data.content;
    if (data.tags.length < 2) {
        categoryOne.innerHTML = data.tags[0];
        categoryTwo.classList.add('hide')
    } else {
        categoryOne.innerHTML = data.tags[0];
        categoryTwo.innerHTML = data.tags[1];
    }
  })
  .catch(error => {
    console.log(error)
  })
}
