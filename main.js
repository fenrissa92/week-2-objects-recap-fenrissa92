/*
## Task 1 - Declaring Objects

In your `main.js`, convert the following sentences into JavaScript objects.

> My cat is black, his name is Tony, and he loves cuddles.

```js
const myCat = {
  color: "black",
  name: "Tony",
  lovesCuddles: true,
};
```

👉 Convert the rest!

Create an object called `myHouse`:
> My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D.

Create an object called `myCar`:
> My car is red, has 4 wheels, power steering, and 2 seats, and does 20 miles per gallon.

Create an object called `myFavouriteFilm`:
> My favourite film's title is The Dark Knight, it was released in 2008, and the lead actor is Christian Bale.

*/

const myHouse = {
    numberOfFloors: 2,
    hasParking: false,
    numberOfBedrooms: 2,
    hasGarden: true,
    energyRating: "D",
};

const myCar = {
    colour: "red",
    wheelsNumber: 4,
    steeringType: "power",
    numberOfSeats: 2,
    milesPerGalon: 20,
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    releasedDate: 2008,
    leadActor: "Christian Bale",
};

/*
## Task 2 - Reading values

👉 Copy this object into your JavaScript file.

```js
let person = {
  name: "Ben",
  likesChocolate: true,
};
```

👉 Below that, use dot notation to console.log the value of the `likesChocolate` property.

👉 Then write an if statement that will console.log `"Ben loves chocolate"` if likesChocolate has a value of true else console.log `"Ben hates chocolate"`. The condition for the if, and the name Ben should both be read from the object using dot notation.

👉 Change the object's values and re-run your code. The name and the boolean should affect how your program runs.
*/

let person = {
    name: "Ben",
    likesChocolate: true,
  };

console.log(person.likesChocolate)

if (person.likesChocolate = true) {
  console.log("Ben loves chocolate");
} else {
  console.log("Ben hates chocolate");
}