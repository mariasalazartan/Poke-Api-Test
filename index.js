// 1️⃣. Seleccionar los elementos HTML que vamos a utilizar:
// - Imagen de los pokemon
// - Stats de cada uno
// 🤓 Pista: revisa el método document.querySelector()

// Selectores para el Pokemon 1
const pokemon1Img = document.querySelector('.pokemon-1__img');
const pokemon1HP = document.querySelector('.pokemon-1__hp');
const pokemon1Name = document.querySelector('.pokemon-1__name');
const pokemon1Attack = document.querySelector('.pokemon-1__attack');
const pokemon1Defense = document.querySelector('.pokemon-1__defense');
const pokemon1Type = document.querySelector('.pokemon-1__type');

// Selectores para el Pokemon 2
const pokemon2Img = document.querySelector('.pokemon-2__img');
const pokemon2HP = document.querySelector('.pokemon-2__hp');
const pokemon2Name = document.querySelector('.pokemon-2__name');
const pokemon2Attack = document.querySelector('.pokemon-2__attack');
const pokemon2Defense = document.querySelector('.pokemon-2__defense');
const pokemon2Type = document.querySelector('.pokemon-2__type');

// 2️⃣. Miremos ahora la API de Pokemon :)
// - Haz un llamado a la URL https://pokeapi.co/api/v2/pokemon/ y analiza cómo devuelve su respuesta
// La API retorna un pokemon https://pokeapi.co/api/v2/pokemon/{ID} si se provee un ID al final.
// 🤓 Pista: Para enfrentar 2 pokemones aleatores, necesitamos hacer 2 llamados a la API con 2 n´¨úmeros aleatorios entre el 1 y el 900


// 3️⃣ - Crear una función que genere un número random entre 1 y 900.
// Puedes usar esta: 👩🏻‍💻
const getRandomNumber = (numMin, numMax) => {
  return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
};

// 4️⃣ - Asignar un número random al ID de los que serán nuestros pokemons
// Declara 2 variables para cada pokemon y guarda los números que retorna la función en ellos
const poke1ID = getRandomNumber(1, 900);
const poke2ID = getRandomNumber(1, 900);

// 5️⃣ - Crear una función para traer (fetch) data de la API
// Dale una mirada a la función fetch -> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// Recuerda la URL de la API https://pokeapi.co/api/v2/pokemon/${pokeID}
const getPokemon = async (pokeID) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  const data = await response.json();
  return data;
};

// 6️⃣ - Vamos a crear los pokemons en la función createPokemons.
// Primero Haz varias pruebas a las API para examinar bien qué devuelve, esa data
// será necesaria para popular nuestros elementos HTML
// 🤓 Pista: - Crea una función asíncrona que reciba los 2 ID de los pokemon, es decir los números que obtenemos de llamar la función random
//           - Haz una llamada a la API por cada pokemon, guarda los datos que te devuelve en dos variables: pokemon1 y pokemon2
//           - Toma los elementos HTML que seleccionamos más arriba y utiliza su propiedad innerHTML para añadir la info que necesitamos de la API
const createPokemons = async (id1, id2) => {
  // Llamadas a la API para obtener datos de los Pokémon
  const pokemon1Data = await getPokemon(id1);
  const pokemon2Data = await getPokemon(id2);

  // Poblar los elementos HTML con los datos obtenidos de la API
  pokemon1Img.src = pokemon1Data.sprites.front_default;
  pokemon1HP.textContent = pokemon1Data.stats[0].base_stat;
  pokemon1Name.textContent = pokemon1Data.name;
  pokemon1Attack.textContent = pokemon1Data.stats[1].base_stat;
  pokemon1Defense.textContent = pokemon1Data.stats[2].base_stat;
  pokemon1Type.textContent = pokemon1Data.types[0].type.name;

  pokemon2Img.src = pokemon2Data.sprites.front_default;
  pokemon2HP.textContent = pokemon2Data.stats[0].base_stat;
  pokemon2Name.textContent = pokemon2Data.name;
  pokemon2Attack.textContent = pokemon2Data.stats[1].base_stat;
  pokemon2Defense.textContent = pokemon2Data.stats[2].base_stat;
  pokemon2Type.textContent = pokemon2Data.types[0].type.name;
};

// 7️⃣ - Vamos a practicar eventos en JS, de esta manera vamos a poder controlar cuándo traer pokemons desde la interfaz
// Nuestra función fetch va a traer pokemons cada que el código es ejecutado, es decir cuando la página se recarga
// Vamos a añadir un botón que recargue la página en cada click, así podemos obtener nuevos pokemons random cada vez.
// 🤓 Pista: - Seleccionar el elmento HTML del botón
//           - Llamar a la función createPokemons solo cuando se dé click a ese botón (lee sobre eventListeners https://www.w3schools.com/js/js_htmldom_eventlistener.asp )
// 🕵🏻‍♀️ En nuestra app tenemos 3 botones. El de Catch!, Fight! y el que OK! que aparece en el modal cuando pelean los pokemons
// Cada botón tendrá atado un eventListener que vamos a construir juntos ❤️
