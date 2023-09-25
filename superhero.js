const avengers = [ 
  { 
     "name": "Iron Man", 
     "alter_ego": "Tony Stark", 
     "primary_power": 
     "Powered Armor", "universe": 
     "Marvel Cinematic Universe", "age": 48 
  },
  {
      "name": "Captain America", 
      "alter_ego": "Steve Rogers", 
      "primary_power": "Super Soldier Serum", 
      "universe": "Marvel Cinematic Universe", "age": 105 
  }, 
  { 
      "name": "Thor", 
      "alter_ego": "Thor Odinson",
      "primary_power": "Super Strength", 
      "universe": "Marvel Cinematic Universe", 
      "age": 1500 
  },
  {
      "name": "The Hulk", 
      "alter_ego": "Bruce Banner",
      "primary_power": "Super Strength",
      "universe": "Marvel Cinematic Universe",
      "age": 49 
  },
  { 
      "name": "Black Widow",
       "alter_ego": "Natasha Romanoff",
      "primary_power": "Expert Spy and Assassin",
      "universe": "Marvel Cinematic Universe",
      "age": 37
  },
  {
      "name": "Hawkeye", 
      "alter_ego": "Clint Barton",
      "primary_power": "Expert Marksman",
      "universe": "Marvel Cinematic Universe",
      "age": 51
   }
];

// Loop to log each superhero's name
console.log("Superheroes:");
for (let i = 0; i < avengers.length; i++) {
  console.log(avengers[i].name);
}

// Loop to log superheroes with "Super Strength" as their primary power
console.log("\nSuperheroes with Super Strength:");
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].primary_power === "Super Strength") {
    console.log(avengers[i].name);
  }
}

// Loop to log superheroes aged 50 or older
console.log("\nSuperheroes aged 50 or older:");
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].age >= 50) {
    console.log(avengers[i].name + " - Age: " + avengers[i].age);
  }
}
