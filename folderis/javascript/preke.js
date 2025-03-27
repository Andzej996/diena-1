const id = new URLSearchParams(window.location.search).get("id");

axios
  .get("https://fakestoreapi.com/products/" + id)
  .then((response) => {
    if (!id) {
      throw "nera prekes";
    }
    const preke = response.data;

    console.log(preke);

    const prekeDiv = document.createElement("div");
    prekeDiv.className = "preke";

    const pavadinimas = preke.title;
    const nuotrauka = preke.image;
    const kaina = preke.price;
    const aprasymas = preke.description;
    const reitingas = preke.rating.rate;

    if (!pavadinimas) {
      throw "nera prekes";
    }

    prekeDiv.innerHTML = `
    <div style="background-image: url(${nuotrauka})">
    </div>
    <div>
    <p>${pavadinimas}</p>
    <p>${reitingas}/5 </p>
    <p>${kaina} &euro;</p>
    <p>${aprasymas} &euro</p>
    </div>
    `;

    document.body.prepend(prekeDiv);
  })
  .catch((e) => {
    document.body.prepend(e);
  });
