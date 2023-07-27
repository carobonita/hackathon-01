//An images class that contains a constructor function
//The function selects an image (either from a folder or from an external webpage)
//and inserts it into the body of our page

// jordan's client id: JGL2iqiPrKwSuxcLZxW-tHNgeR1VnUfFfm0lSGHE30c
// carolina's client id: EvWh6MWZlhFLqmZdhg3AfBG1V85Zb3A9tkPTmEMfXuI

const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const headers = new Headers({
  Authorization: "Client-ID EvWh6MWZlhFLqmZdhg3AfBG1V85Zb3A9tkPTmEMfXuI",
  "Accept-Version": "v1",
});

class Image {
  constructor(el) {
    // get from API
    fetch("https://api.unsplash.com/photos/random?orientation=squarish", {
      method: "GET",
      headers,
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.image = document.createElement("img");
        this.image.setAttribute("id", "image");
        this.image.setAttribute("src", data.urls.regular);
        el.appendChild(this.image);
      });
  }
}

//A quotes class that contains a constructor function
//The function selects a quote, etc.

class Quote {
  constructor(el) {
    const quoteArray = [
      "If at first you don't succeed, find out if the loser gets anything.",
      "There is no sunrise so beautiful that it is worth waking me up to see it.",
      "Clothes make the man. Naked people have little or no influence on society.",
      "Before you reach the top of the ladder, make sure it's leaning against the right wall.",
      "If at first you don't succeed, failure may be your style.",
      "If you think you are too small to make a difference, try sleeping with a mosquito.",
      "A computer once beat me at chess, but it was no match for me at kick boxing.",
      "Never follow anyone else's path. Unless you're in the woods and you're lost and you see a path. Then by all means follow that path.",
      "If at first you don't succeed, then skydiving definitely isn't for you.",
      "People often say that motivation doesn't last. Well, neither does bathing, that's why we recommend it daily.",
      "I walk around like everything's fine, but deep down, inside my shoe, my sock is sliding off.",
    ];
    //assing randome method to daily quotes
    let dailyQuote = randomNumber();
    //information for the DOM
    this.quote = document.createElement("h2");
    this.quote.setAttribute("id", "quote");
    this.quote.innerText = quoteArray[dailyQuote];
    el.appendChild(this.quote);
  }
}

//add an addEventListener for the DOM loader
document.addEventListener("DOMContentLoaded", () => {
  const title = document.createElement("h1");
  const body = document.querySelector("body");
  title.innerText = "Images";

  //invoke constructor new Image function
  new Image(body);
  new Quote(body);
});

//we could add a new event listener that listens for a mouse click
//new Image
//new Quote

//fecth the data from API
