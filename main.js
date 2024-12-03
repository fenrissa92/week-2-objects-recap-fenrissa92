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

/*
## Task 3 - Bracket Notation

👉 Copy this object into your JavaScript file:

```js
let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};
```

👉 Use bracket notation and the `smallTalk property` to console.log Ben's smalltalk phrase.

👉 Use bracket notation and the `desiredPleasantry` variable to console.log Ben's greeting phrase.

👉 Change what is console logged by changing the value of `desiredPleasantry`.

*/

let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"])

console.log(desiredPleasantry + " " + bensPhrases["greeting"])

console.log(desiredPleasantry + " " + bensPhrases["farewell"])

/*
## Task 4 - Reassigning Properties

👉 Copy the object below, and fill in the blank name values to represent yourself, but do not change the `isBootcamper` key; it must remain as false (just for a little bit...).

```js
let me = {
  firstName: "firstName",
  lastName: "lastName",
  isBootcamper: false,
};
```

👉 Below your object, reassign the property of `isBootcamper` using the assignment operator. Make it `true`!
*/

let me = {
    firstName: "Samantha",
    lastName: "Daly",
    isBootcamper: false,
  };

  console.log(me)

  me.isBootcamper = true;
  
  console.log(me)

/*
## Task 5 - Nested Objects

👉 Copy this object into your JavaScript file.

```js
let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};
```

👉 Using dot notation, read the text from the communication object and store it in a variable.

👉 If the priority is urgent, then console.log the variable, else do nothing.
*/

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  console.log(communication.payload.message.text)

  if (communication.payload.message.priority = "URGENT") {
console.log(communication.payload.message.text)
  }

/*
## Task 6 - Get Experimental

👉 Explore objects more. For example, you could...

- Create multi-layered nested objects, and access properties at different layers.
- Create functions that take in information and use that information to create or change objects. For example, you could make a function that took in someone's name and age and return an object for that person with those details as properties.
- Look online in documentation (for example, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) or [W3Schools](https://www.w3schools.com/js/js_objects.asp)) about objects in JavaScript. Can you find anything new or surprising?

*/