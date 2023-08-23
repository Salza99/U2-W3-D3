const endpoint = "https://striveschool-api.herokuapp.com/books";

fetch(endpoint)
  .then((res) => res.json())
  .then((books) => {
    let ul = document.querySelector("ul");
    for (let i = 0; i < books.length; i++) {
      let li = document.createElement("li");
      ul.appendChild(li);

      li.innerText = books[i].title;
    }
  });
