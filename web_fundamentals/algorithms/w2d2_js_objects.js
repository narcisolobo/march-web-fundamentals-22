/* 
Week 2 Day 2 - So you want to be a JS objects master?\
What are objects?
*/

var monster = {
  id: 1,
  name: "Bulbasaur",
  types: ["poison", "grass"]
};

/* 
Using the monster variable above how could we access the name?
Using the monster variable above how could we access the 2nd type?
*/

console.log(monster.name);
console.log(monster.types[1]);

// Arrays of Objects
var pokémon = [
  { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
  { "id": 5, "name": "Charmeleon", "types": ["fire"] },
  { "id": 9, "name": "Blastoise", "types": ["water"] },
  { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
  { "id": 23, "name": "Ekans", "types": ["poison"] },
  { "id": 24, "name": "Arbok", "types": ["poison"] },
  { "id": 25, "name": "Pikachu", "types": ["electric"] },
  { "id": 37, "name": "Vulpix", "types": ["fire"] },
  { "id": 52, "name": "Meowth", "types": ["normal"] },
  { "id": 63, "name": "Abra", "types": ["psychic"] },
  { "id": 67, "name": "Machamp", "types": ["fighting"] },
  { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
  { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
  { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
  { "id": 98, "name": "Krabby", "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
  { "id": 133, "name": "Eevee", "types": ["normal"] },
  { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...

for (var i = 0; i < pokémon.length; i++) {
  // console.log(pokémon[i].id);
  if (pokémon[i].id > 99) {
    console.log(pokémon[i].name);
  }
}

/* 
Challenges - using the array of pokémon above and loops:
1. console.log the pokémon objects whose id is evenly divisible by 3
2. console.log the pokémon objects that have more than one type
3. console.log the names of the pokémon whose only type is "poison"
4. console.log the first type of all the pokémon whose second type is "flying"
Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
built-in methods are a-okay for the bonus challenge
*/