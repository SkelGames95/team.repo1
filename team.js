const team = [
    {name:"Marco", surname:"Polenta", age:28, city:"San Severino Marche", hobby:"Videogames", favoriteFood:"Meat", favoriteVideoGame:"Cyberpunk2077", favoriteFilm:"Inception", favoriteBook:"Neuromancer", petName:"Kurama"},
    {name:"Giuseppe", surname:"Crimi", age:23, city:"Castelvetrano", hobby:"Videogames", favoriteFood:"Ravioli", favoriteVideoGame:"Point Blank", favoriteFilm:"Apocalypse Now", favoriteBook:"Dictionary", petName:"Sharon"},
    {name:"Alessandro", surname:"Weng", age:23, city:"Naples", hobby:"Butterfly Knife", favoriteFood:"Pizza", favoriteVideoGame:"Shooters", favoriteFilm:"", favoriteBook:"", petName:"Kiki"},
    {name:"Ugo Davide", surname:"Vanacore", age:23, city:"Milano", hobby:"Reading", favoriteFood:"Pasta", favoriteVideoGame:"DragonBall", favoriteFilm:"V for Vendetta", favoriteBook:"Due candele per il diavolo", petName:"Ade"},
    {name:"Federico", surname:"Puricella", age:25, city:"Torino", hobby:"Football", favoriteFood:"Pizza", favoriteVideoGame:"CallOfDuty", favoriteFilm:"", favoriteBook:"", petName:""},
    {name:"Gabriele", surname:"Provenzano", age:22, city:"Palermo", hobby:"Music", favoriteFood:"Pasta", favoriteVideoGame:"Assassins Creed Saga", favoriteFilm:"Star Wars Saga", favoriteBook:"La Scienza Di Interstellar", petName:""}
]

function printLOL(favoriteVideoGame, teamArray) {
    for (let i = 0; i < teamArray.length; i++) {
      if (teamArray[i].favoriteVideoGame === "LOL" || teamArray[i].favoriteVideoGame === "League Of Legends")  {
        console.log(`${teamArray[i].surname}'s favorite video game is ${favoriteVideoGame}`);
      }
    }
  return;
}

  console.log(`No one likes League of Legends. LOL`);

  let names = ["Polenta Marco" , "Crimi Giuseppe" , "Weng Alessandro" , "Vanacore Ugo Davide" , "Puricella Federico" , "Provenzano Gabriele"];
let sortedNames = names.sort();
console.log(sortedNames);
return;