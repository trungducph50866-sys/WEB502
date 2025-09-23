"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.types[0].type.name
    };
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
async function renderPokemons() {
    const app = document.getElementById("app");
    const pokemons = [];
    for (let i = 1; i <= 10; i++) {
        const p = await fetchPokemon(i);
        pokemons.push(p);
    }
    const shuffled = shuffle(pokemons);
    app.innerHTML = shuffled.map(p => `
    <div class="card">
      <span class="id">#${p.id}</span>
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Type: ${p.type}</p>
    </div>
  `).join("");
}
renderPokemons();
//# sourceMappingURL=app.js.map