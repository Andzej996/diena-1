const prekiuSarasas = document.createElement("div");
prekiuSarasas.className = "prekiu-sarasas";

axios.get("https://fakestoreapi.com/products/").then((response) => {
  for (const preke of response.data) {
    const prekeDiv = document.createElement("div");
    prekeDiv.className = "preke";

    const pavadinimas = preke.title;
    const nuotrauka = preke.image;
    const kaina = preke.price;

    prekeDiv.innerHTML = `
    <div style="background-image: url(${nuotrauka})">
    </div>
    <div>
    <p>${pavadinimas}</p>
    <p>${kaina}</p>
    <a href="preke.html?id=${preke.id}">
    <button>Perziureti</button>
    </a>
    </div>
    `;
    prekiuSarasas.appendChild(prekeDiv);
  }
  document.body.prepend(prekiuSarasas);
});
