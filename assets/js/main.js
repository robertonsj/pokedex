
/**Precisamos converter a requisição JSON em uma lista HTML. */
function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
        <section class="content-left">
        <p>${pokemon.name}</p>
          ${pokemon.types.map((type) => `<span class="type">${type}</span>`).join('') }
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

//Lista ordenada do DOM
const pokemonList = document.querySelector("#pokemons");
  
//Converter uma lista de objetos em uma lista HTML;
//O seguinte parâmetro é para garantir que teremos uma lista.
//No map, passaremos uma função transformadora.
  pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
  })