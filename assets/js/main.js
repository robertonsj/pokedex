
const pokemonList = document.querySelector("#pokemons");
const loadMoreButton = document.querySelector("#loadMoreButton")

const limit = 5
let offset = 0;


/**Precisamos converter a requisição JSON em uma lista HTML. */
function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
        <section class="content-left">
        <p>${pokemon.name}</p>
          ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('') }
        </section>

        <section class="content-right">
        <span class="number">#${pokemon.num}</span>
        <img
            src="${pokemon.photo}"
            alt="${pokemon.name}"
        />
        </section>
        </li>
    `;
}

//Converter uma lista de objetos em uma lista HTML;
//No map, passaremos uma função transformadora.
function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
  loadPokemonItems()
})
