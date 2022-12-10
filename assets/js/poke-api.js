/**A partir daqui, teremos o objeto com a funções
 * de manipulação da poke API.
 */

const pokeApi = {};

//Retornará toda a manipulação do Fetch
//Teremos uma função para abstrair o consumo do endpoint (results)
pokeApi.getPokemons = (offset = 0, limit = 0) => {
  const url =
    "https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit${limit}";
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error));
};
