let sweets = new Map([

  ["cookies", "chocolate"],

  ["ice-cream", "vanil"],

  ["cake", "karamel"]

]);

for (let name of sweets.keys()) {

  console.log(name);
}

for (let flavour of sweets.values()) {

  console.log(flavour);

}

for (let elem of sweets) { 

   console.log(elem); 

}

