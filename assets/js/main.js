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

//Lista ordenada do DOM
const pokemonList = document.querySelector("#pokemons");
  
//Converter uma lista de objetos em uma lista HTML;
//O seguinte parâmetro é para garantir que teremos uma lista.
//No map, passaremos uma função transformadora.
  pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(converterPokemonToHTML).join('')
  })