let url = "https://pokeapi.co/api/v2/pokemon/chimchar";
let fluidContainer = document.getElementsByClassName("contanier-fluid")[0];
function getTypes(pokemonJSON){
    let types = [];
    for(let type of pokemonJSON.types){
        types.push(type.type.name)
    }
    return types;
}


function getMoves(pokemonJSON){
    let moves = [];
    for(let move of pokemonJSON.moves){
        moves.push(move.move.name)
    }
    return moves;
}

function getAbilities(pokemonJSON){
    let abilities = []
    for(let ability of pokemonJSON.abilities){
        abilities.push(ability.ability.name)
    }
    return abilities;
}




function createPokemonElement(pokemon){

    let h1 = document.createElement("h1")
    h1.innerHTML = pokemon.name;
    
    let img = document.createElement("img")
    img.src = pokemon.sprite
    
    let h2 = document.createElement("h2");
    h2.innerText = pokemon.number;
    
    let p = document.createElement("p");
    for(let type of pokemon.types) {
        p.innerText += `${type}`
    }
    let moveUL = document.createElement("ul");
    for(let move of pokemon.moves){
        moveUL.innerHTML += `<li> ${move} </li>`
    }
    let abilitiesUL = document.createElement("ul");
    for(let ability of pokemon.abilities){
        abilitiesUL.innerHTML += `<li> ${ability} </li>`
    }
    let div = document.createElement("div");
    div.append(h1, h2,img, p, moveUL, abilitiesUL);
    fluidContainer.appendChild(div);

}


fetch(url)
.then((resp) => resp.json())
.then(function(data){
    console.log(data);
    let name = data.name;
    let sprite = data.sprites.front_default;
    let number = data.id;
    let types = getTypes(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let chimchar = new Pokemon(name, sprite, number, types, moves, abilities);
    console.log(chimchar);
    createPokemonElement(chimchar);
})
    

    



.catch(function(error){
    console.log(error);
    
});
