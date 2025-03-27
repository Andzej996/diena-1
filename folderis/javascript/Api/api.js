// async function fetchMovie() {
//   const response = await fetch(
//     "https://api.tvmaze.com/search/shows?q=spiderman"
//   );
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// fetchMovie()
//   .then((data) => {
//     const moviesContainer = document.createElement("div");
//     moviesContainer.className = "movies-container";

//     for (const item of data) {
//       const title = item.show.name;
//       const year = item.show.premiered.slice(0, -6);
//       const imgLink = item.show.image.medium;
//       const genres = item.show.genres;
//       const summrary = item.show.summrary;

//       const movieDiv = document.createElement("div");
//       movieDiv.className = "movie";
//       movieDiv.innerHTML = `
//         <img src="${imgLink}" alt="${title}">
//         <h3>${title} (${year}) </h3>
//         <p>Genres: ${genres.join(", ")}<p>
//         <p>${summrary}<p>
//         `;

//       moviesContainer.appendChild(movieDiv);
//     }
//     document.body.appendChild(moviesContainer);
//   })

//   .catch((err) => console.log(err));

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const naujaUzduotis = {
  userID: 1,
  id: 101,
  title: "Mano nauja uzduotis",
  body: "Reikia uzsakyti picos",
};

axios
  .post("https://jsonplaceholder.typicode.com/posts", naujaUzduotis)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
