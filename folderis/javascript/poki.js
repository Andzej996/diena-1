const id = 5;

axios
  .get(`https://pokeapi.co/api/v2/ability/${id}`)
  .then(async (response) => {
    console.log("response", response.data.pokemon);

    const pokemonsContainer = document.createElement("div");
    pokemonsContainer.className = "pokemons-list";

    for (const pokemon of response.data.pokemon) {
      const pokemonoURL = pokemon.pokemon.url;

      const atsakymas = await axios.get(pokemonoURL);
      const pavaidinimas = atsakymas.data.name;
      const nuotrauka = atsakymas.data.sprites.front_default;
      console.log(pavaidinimas, nuotrauka);

      template = "";
      for (const stiprybe of atsakymas.data.stats) {
        template += `
        ${stiprybe.base_stat} ${stiprybe.stat.name}<br>
        `;
      }

      const pokemonDiv = document.createElement("div");
      pokemonDiv.className = "pokemon";
      pokemonDiv.innerHTML = `
      <img src="${nuotrauka}"/>
      <p>${pavaidinimas}<p>
      <small>${template}</small>
      `;

      pokemonsContainer.appendChild(pokemonDiv);
    }

    document.body.prepend(pokemonsContainer);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
