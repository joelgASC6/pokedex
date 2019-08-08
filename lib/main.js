let url = "https://pokeapi.co/api/v2/pokemon/chimchar";

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    console.log(data);
})

.catch(function(){})