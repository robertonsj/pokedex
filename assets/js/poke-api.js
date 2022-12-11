/**A partir daqui, teremos o objeto com a funções
 * de manipulação da poke API.
 */

const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.num = pokeDetail.order
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon) //Iremos incrementar a função para converter no nosso modelo (uma instancia da classe Pokemon)

}

//Retornará toda a manipulação do Fetch
//Teremos uma função para abstrair o consumo do endpoint (results)
pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit${limit}";
  

    return fetch(url) //requisição da lista de pokemons
    .then((response) => response.json()) //Devolve um http response que é convertido para json
    .then((jsonBody) => jsonBody.results) //O resultado json tem muita informação, e queremos apenas a lista de pokemons
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//Além da lista de pokemons, queremos mais detalhes para cada pokemon
    .then((detailRequests) => Promise.all(detailRequests))//Depois, aguardar a requisição de detalhes, que na linha 8 já estavam sendo convertidos para json 
    .then((pokemonsDetails) => pokemonsDetails) //Lista de detalhes de pokemons definitiva
}
