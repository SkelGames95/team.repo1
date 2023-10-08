const team = [
    {name:"Marco", surname:"Polenta", age:28, city:"San Severino Marche", hobby:"Videogames", favoriteFood:"Meat", favoriteVideoGame:"Cyberpunk2077", favoriteFilm:"Inception", favoriteBook:"Neuromancer", petName:"Kurama"},
    {name:"Giuseppe", surname:"Crimi", age:23, city:"Castelvetrano", hobby:"Videogames", favoriteFood:"Ravioli", favoriteVideoGame:"Point Blank", favoriteFilm:"Apocalypse Now", favoriteBook:"Dictionary", petName:"Sharon"},
    {name:"Alessandro", surname:"Weng", age:23, city:"Naples", hobby:"Butterfly Knife", favoriteFood:"Pizza", favoriteVideoGame:"Shooters", favoriteFilm:"", favoriteBook:"", petName:"Kiki"},
    {name:"Ugo Davide", surname:"Vanacore", age:29, city:"Milano", hobby:"Reading", favoriteFood:"Pasta", favoriteVideoGame:"DragonBall", favoriteFilm:"V for Vendetta", favoriteBook:"Due candele per il diavolo", petName:"Ade"},
    {name:"Federico", surname:"Puricella", age:25, city:"Torino", hobby:"Football", favoriteFood:"Pizza", favoriteVideoGame:"CallOfDuty", favoriteFilm:"", favoriteBook:"", petName:""},
    {name:"Gabriele", surname:"Provenzano", age:22, city:"Palermo", hobby:"Music", favoriteFood:"Pasta", favoriteVideoGame:"Assassins Creed Saga", favoriteFilm:"Star Wars Saga", favoriteBook:"La Scienza Di Interstellar", petName:""},
]

function players(arr){
    let lolPlayers = [];
        for (let i = 0 ; i < arr.length; i++){
            let lolString = (arr[i].name + " " + arr[i].surname + " loves play LOL.");
            if (arr[i].favoriteVideoGame === "League of Legends" || arr[i].favoriteVideoGame === "LOL"){
                lolPlayers.push(lolString);
        }
    }
    return lolPlayers;
    
}

if (players(team).length > 0){
    console.log(players(team));
} else {
    console.log("No one likes to play LOL");
}

console.log("------------------------------------------------");

function printPet(teamArray1) {
    for (let j = 0; j < teamArray1.length; j++) {
      if (teamArray1[j].petName !== "") { //if teamarray of j is a different of empty string petname you...
        console.log(teamArray1[j].name,teamArray1[j].surname,"have a pet called:",teamArray1[j].petName);
      }
    }
}

printPet(team);

console.log("------------------------------------------------");

function printTeamInAgeOrder(team) {
    team.sort((a, b) => a.age - b.age);
    for (let member of team) {
    console.log(member.name);
    }
}

printTeamInAgeOrder(team);
