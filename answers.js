////////////////////////////////
// Easy Going
////////////////////////////////

for (let i=1; i<21; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i=0; i<201; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i=1; i<101; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz');
    }else if (i % 5 === 0)  {
        console.log('Buzz'); 
    }else {
        console.log(i);
    }
        
    }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


plantee.splice(2, 1, 5001)
console.log(plantee);


wolfy.splice(3, 1, "Gotham City")
console.log(wolfy);


dart.splice(3, 0, "Hawkins")
console.log(dart);


wolfy.splice(0, 1, "Gameboy")
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let upperName of ninjaTurtles) {
    console.log(upperName.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch'];


console.log(favMovies.indexOf('Titanic'));

console.log(favMovies.sort());

favMovies.pop();
console.log(favMovies);

favMovies.push('Guardians of the Galaxy')
console.log(favMovies);

console.log(favMovies.reverse());

favMovies.shift();
console.log(favMovies);

favMovies.unshift('Across the Universe');
console.log(favMovies);

favMovies.splice(14, 1, "Avatar");
console.log(favMovies);

const lastHalfFav = favMovies.slice(10);
console.log(lastHalfFav);

const lastHalfCopy = lastHalfFav;
console.log(lastHalfCopy); 

console.log(favMovies.indexOf('Fast and Furious')); 
// output will be -1 when trying to fetch something in an array that doesn't exist.


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"], 
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
];


whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]); 


////////////////////////////////
//  Excited Kitten
////////////////////////////////


const kittyTalk = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
]


for (let i=0; i<20; i++) {
    if (i%2 === 0) {
        let meow = Math.floor(Math.random() * kittyTalk.length);
        console.log(kittyTalk[meow]); 
    }else {
        console.log("Love me, pet me! HSSSSSS!");
    }

}


////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const sortNums = nums.sort();
let middleIndex = Math.floor(sortNums.length/2);

if (nums.length % 2 !== 0) {
     let median = sortNums[middleIndex];
    console.log(median);
} else {
    median = (sortNums[middleIndex] + sortNums[middleIndex - 1]/2);
    console.log(median);
}



