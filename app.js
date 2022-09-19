//fetch toma o agarra laa url.
//then -> manda lo que toma a la variable 'resultado'.
//.json() lo transforma a formato json, y eso lo meto en la variable datos.
//con .push(datos) estoy agregando cada dato al array pokemones.

let numerodePokemones = 20;
let pokemones = [];
let cardsContainer = document.querySelector('.cards-container');

for(i=1; i<=numerodePokemones; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(resultado => resultado.json())
    .then(datos =>  {
    
        let id = datos.id;             //Creo variables (id y name) que almacenan el id y name de cada pokemon del json
        let name = datos.name;
        let img = datos.sprites.other['official-artwork'].front_default;
        let hp = datos.stats[0].base_stat;
        let attack = datos.stats[1].base_stat;
        let defense = datos.stats[2].base_stat;
        let magic = datos.stats[3].base_stat;

        let newPokemon = new CardPokemon(id, name, img, hp, attack, defense, magic);

        pokemones.push(newPokemon);
        if (pokemones.length == numerodePokemones) {
            pokemones.forEach(pokemon => {
                cardsContainer.innerHTML += `<div class="card-container" id="${pokemon.id}" >
                <p class="numero">${pokemon.id}</p>
                <h2 class="nombre">${pokemon.name}</h2>
                <div class="circulo"></div>
                <img class="poke-img"src="${pokemon.img}" alt="Imagen de un pokemon">
                <div class="stats-container">
                    <div class="stats">
                        <img class="stats-img" src="./img/corazon.png" alt="">
                        <progress class="stats-progress" min="0" max="100" value="${pokemon.hp}"></progress>
                        <p class="stats-values">${pokemon.hp}</p>
                    </div>
                    <div class="stats">
                        <img class="stats-img" src="./img/espada.png" alt="">
                        <progress class="stats-progress" min="0" max="100" value="${pokemon.attack}"></progress>
                        <p class="stats-values">${pokemon.attack}</p>
                    </div>
                    <div class="stats">
                        <img class="stats-img" src="./img/proteger.png" alt="">
                        <progress class="stats-progress" min="0" max="100" value="${pokemon.defense}"></progress>
                        <p class="stats-values">${pokemon.defense}</p>
                    </div>
                    <div class="stats">
                        <img class="stats-img" src="./img/personal.png" alt="">
                        <progress class="stats-progress" min="0" max="100" value="${pokemon.magic}"></progress>
                        <p class="stats-values">${pokemon.magic}</p>
                    </div>
                </div>
            </div>`
            })
    }
    }); 
}


//Clase -> Plantilla para crear objetos
class CardPokemon {
    constructor(id, name, img, hp, attack, defense, magic) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.magic = magic;
    }
}