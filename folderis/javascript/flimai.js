function onKeyPress(event) {
  if (event.keyCode === 13) {
    loadMovies();
  }
}

function loadMovies() {
  const keyword = document.getElementById("movie-name").value;

  if (keyword.length > 0) {
    axios
      .get("https://api.tvmaze.com/search/shows?q=" + keyword)
      .then((response) => {
        const moviesContainer = document.createElement("div");
        moviesContainer.className = "movies-container";

        for (const item of response.data) {
          const title = item.show.name;
          const year = item.show.premiered
            ? item.show.premiered.slice(0, 4)
            : "Unknown";
          const imgLink = item.show.image
            ? item.show.image.medium
            : "https://via.placeholder.com/210x295?text=No+Image";
          const genres = item.show.genres.join(", ");
          const summary = item.show.summary
            ? item.show.summary
            : "No description available.";

          const movieDiv = document.createElement("div");
          movieDiv.className = "movie";
          movieDiv.innerHTML = `
              <img src="${imgLink}" alt="${title}"/>
              <h3>${title} (${year})</h3>
              <p>Genres: ${genres}</p>
              <p>${summary}</p>
            `;

          moviesContainer.appendChild(movieDiv);
        }

        const moviesElement = document.querySelector(".filmai");
        moviesElement.innerHTML = ""; // Išvalo prieš pridėdamas naujus filmus
        moviesElement.appendChild(moviesContainer);
      })
      .catch((err) => console.log(err));
  }
}
