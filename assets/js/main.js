const offset = 0;
const limit = 10;
const url = "https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit${limit}";

/**Precisamos converter a requisição JSON em uma lista HTML. */
function converterPokemonToHTML(pokemon) {
  return `
    <li class="pokemon">
        <section class="content-left">
        <p>${pokemon.name}</p>
        <span>Grass</span>
        <span>Poison</span>
        </section>

        <section class="content-right">
        <span class="number">#001</span>
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}"
        />
        </section>
        </li>
    `;
}

const pokemons = document.querySelector("#pokemons");

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    for (let pokemon of pokemonList) {
      // console.log(converterPokemonToHTML(pokemon))
      pokemons.innerHTML += converterPokemonToHTML(pokemon);
    }
  })
  .catch((error) => console.error(error));
