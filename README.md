# JavaScript Objects

<details>
<summary>Table of Contents</summary>

- [What is an object?](#what-is-an-object)

  - [Create Object](#create-object)
  - [Properties](#properties)
  - [Custom Methods](#custom-methods)
  - ["this" scope](#this-scope)

- [Manipulating Objects](#manipulating-objects)

  - [Accessing properties and methods](#accessing-properties-and-methods)
  - [Updating properties](#updating-properties)
  - [Removing properties and methods](#removing-properties-and-methods)

- [Looping through an Object](#looping-through-an-object)

- [Object Methods](#object-methods)
  - [Object.assign()](#objectassign--target-soruce---target-object)
  - [Object.keys()](#objectkeys--object---array)
  - [Object.values()](#objectvalues--object---array)
  - [Object.entries()](#objectentries--object---array)
  - [Object.freeze()](#objectfreeze--object---object)
  - [Object.isFrozen()](#obejectisfrozen--object---boolean)
  - [Object.seal()](#objectseal--object---object)
  - [Object.isSealed()](#objectissealed--object---boolean)

</details>

## What is an object?

An object can be described as its counterpart in real life. Take a car for example, it is an object and it has **properties** like make, model, color, engine, number of wheels and so on. It also has **methods**, (things you can do with the car), like starting the car, breaking, using the blinkers and such things.

All cars have these properties but different car of course has different values on these properties. Methods works the same way, all cars have them, although some cars might have extra methods (addons) that other cars don't have. But in general, you can do the same things with every car, like starting, like stopping and so on.

In JavaScript objects works in the same way. It has properties and methods. We have already been using objects during the last couple days without knowing about it.

**Arrays** are a type of object. It has at least one property that we know of, the `.length`. WHich represetnes the number of elements in the array. It also has methods, of which we know afew of them. `.push()`, `.pop()`, `.includes()`, `.map()` and so on. All these methods and properties are shared among all the arrays that we create in our programs.

**Strings** are also objects in JavaScript, it has properties, `.length` for example. It also has methods. We haven'nt used those yet but here is a link to more information about them: [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). You can also try them out by creating a string and then adding a period and see what pops up.

[Back to top](#javascript-objects)

### Create Object

How do we create objects? It's rather easy, we need a variable and we need a variable name. When we assign something we don't assign a value directly but we use a pair of brackets instead, and later we populate it with data.

```js
const someObject = {};
```

This is an empty object. Good practise is to use `const` when declaring an object, since object _(like arrays)_ are passed by reference. The variable name is just a reference to the place on the hard drie where the acutal data is stored.

[Back to top](#javascript-objects)

### Properties

Let's create car instead, and fill with some useful data.

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
};
```

This car represents an object, and it has a few **properties**, four of them. Four properties that represents some sort of information of the car. As you can see, the properties can be of different data types and the structure of a property is `key-value`. The key to the left, and the value to the right, seperated by a colon. Each property is in turn seperated by a comma.

[Back to top](#javascript-objects)

### Custom Methods

An object can also have **methods** that represents an action that the object can do. Methods are in reality just functions but as soon functions are connected to a specific object it becomes a method. Let's add some method to our car.

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
  start: function () {
    console.log("The car is running");
  },
};
```

[Back to top](#javascript-objects)

### "this" scope

`this` keyword refers to an object in JavaScript but which object depends on the context.

- Alone, `this` refers to the gobal window object
- In "use strict" - mode, `this` would be undefined.
- **In an object, `this` refers to the object itself.**
- In a function, `this` refers to the global object, unless it's created in another context.
- ...some other contexts as well.

See this link for more info: [w3schools - this](https://www.w3schools.com/js/js_this.asp)

But it's the third context above that we are interested in.

```js
const person = {
  firstName: "Niklas",
  lastName: "Fähnrich",
  fullName: function () {
    const fullName = `${this.firstName} ${this.lastName}`;
    console.log(fullName);
  },
};

person.fullName();
```

In this example, `this` is used to refer to the obeject's own properties. If we don't use `this` here it will first look inside the function's own scope, and then it it doesn't find any variable it will look in the parent scope.

```js
const firstName = "Henrik";

const person = {
  firstName: "Niklas",
  lastName: "Fähnrich",
  fullName: function () {
    const fullName = `${firstName} ${this.lastName}`;

    console.log(fullName);
  },
};

person.fullName(); // Henrik Fähnrich
```

Since the variable `firstName` exists in the parent scope this will be used instead of the intended property of the object.

[Back to top](#javascript-objects)

## Manipulating Objects

Object are not locked or anything when we create them, they are very open for editing throughout our program.

### Accessing properties and methods

Accessing object can be done it three ways. The first is to us periods on the objects. It's commonly called dot-notation.

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
  start: function () {
    console.log("The car is running");
  },
};

// accessing the model property with dot-notation
const model = car.model;
console.log(model); // V70

const year = car.year;
console.log(year); // 2016
```

The other way is to use an array-like-syntax with the help of square brackets.

```js
// accessing the make property with square brackes
const make = car["make"];
console.log(make); // Volvo
```

It's important to use a string value inside the square brackets otherwise it won't work.

You could alse access properties with the help of destructuring. With this way we can access multiple properties with just one line of code.

```js
const { model, year } = car;

console.log(model); // V70
console.log(year); // 2016
```

We need to be careful here when destructuring when typing the properties we want to extract from the object. They need to match exactly. We could rename our variables using destructruing if we find that necessary.

```js
const { model: version, year: created } = car;

console.log(version); // V70
console.log(created); // 2016
```

Accessing method works in the same way but in order to run the function, or invoke it, we need to add the parenthesis at the end as usual.

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
  start: function () {
    console.log("The car is running");
  },
};

// This is how you invoke a object method
car.start();

// Also works with the array-like-syntax
car["start"]();
```

[Back to top](#javascript-objects)

### Updating properties

Updating properties in an object is done with dot-notation or with square brackets, you just use the assingment operator `=` as well.

```js
const person = {
  firstName: "Niklas",
  lastName: "Fähnrich",
  fullName: function () {
    const fullName = `${firstName} ${this.lastName}`;
    console.log(fullName);
  },
};

person.firstName = "Henrik";
person["lastName"] = "Håkansson";

console.log(person); // We would see the updated changes
```

[Back to top](#javascript-objects)

### Removing properties and methods

Removing properties and methods is very straigh-forward as well. There is a keyword in JavaScript that you can use, and it's called `delete`.

```js
const person = {
  firstName: "Niklas",
  lastName: "Fähnrich",
  fullName: function () {
    const fullName = `${firstName} ${this.lastName}`;
    console.log(fullName);
  },
};

delete person.firstName;

console.log(person); // firstName is removed.
```

[Back to top](#javascript-objects)

## Looping through an Object

Use case: When you want to iterate over the properties of an object, we use the for..in loop.

```js
for (variable in object) {
  // code to be executed in each iteration
}
```

Looping through and object is very similar to looping through an array, but we use another keyword, `in` instead of `of`.

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
  start: function () {
    console.log("The car is running");
  },
};

for (let key in car) {
  console.log(key);
}
```

This example will just print out all the keys of the object. In itself it's not very useful but we can use this key in order to acces the actual values.

```js
for (let key in car) {
  const currentValue = car.key;
  console.log(currentValue);
}
```

Dot-notation doesn't work it this case and that is because the `key` here is a dynamnic value that changes in every iteration, and it is actually the same as the string value of the given key that is currently iterated over. When we use dot-notation like this we actually looks for the property in a literal sense, and that doesn't exist in the car object.

We need to use the array-like-synatx instead. Let's rewrite the loop:

```js
for (let key in car) {
  const currentValue = car[key];
  console.log(currentValue);
}
```

In the first iteration the `key` will have the value of "make", and in the next, "model" and so on, and that is the way the array-like-syntax works like previous examples.

[Back to top](#javascript-objects)

## Object Methods

This is basically different functions that are connected to objects in JavaScript, and all objects share these methods. A key differenc from arrays is that the array methods are available on the arrays themself. If you create an array, say `names`, if you use dot-notation on this variable all methods will be available for you. That's not the case with objects. These methods you acces by writing `Object` with a capital `O`. This `Object` is sort of the root class of all objects. Methods created in this way a called static methods. If you want read about those you can google after some information.

### Object.assign ( target, soruce ) => target object

This method copies all properties from one source object to a target object. It returns the modifed target object.

```js
const target = {
  a: 1,
  b: 2,
};

const source = {
  b: 4,
  c: 5,
};

const modifiedTarget = Object.assign(target, source);

console.log(modifiedTarget);
```

So all properties from the source object will be available in the target object after this operation. Also, if some property already existed in the target object, they will simply we overwritten.

You can also use this method to create a clone of the source object. The clone object will have its own reference.

```js
const clonedObject = Object.assign({}, source);

clonedObject === source; // false;
```

[Back to top](#javascript-objects)

### Object.keys ( object ) => array

This method returns an array of the given objects string-keyed property names.

```js
const country = {
  name: "Sweden",
  weather: "Ice cold",
  population: 1000,
  location: { long: 163489, lat: 124192739 },
};

const keys = Object.keys(country);
console.log(keys);
```

[Back to top](#javascript-objects)

### Object.values ( object ) => array

Works the same was as `Object.keys()` but instead returns an array with the values.

```js
const values = Object.values(country);
console.log(values);
```

[Back to top](#javascript-objects)

### Object.entries ( object ) => array

Also works in the same way as the two methods above, but returns an array with nested arrays containg each key-value pais.

```js
const entries = Object.entries(country);
console.log(entries);

for (let entry of entries) {
  console.log(entry);
}
```

[Back to top](#javascript-objects)

### Object.freeze ( object ) => object

This method will freeze the object, which means you won't be able to change any properties nor add or remove properties.

```js
const country = {
  name: "Sweden",
  weather: "Ice cold",
  population: 1000,
  location: { long: 163489, lat: 124192739 },
};

country.name = "Finland"; // Works

Object.freeze(country);

country.name = "Denmark"; // Nothing will happen, might throw error.

country.color = "Blue and yellow"; // Won't work either.
```

[Back to top](#javascript-objects)

### Object.isFrozen ( object ) => boolean

Checks the object if it is frozen or not. Returns a boolean.

[Back to top](#javascript-objects)

### Object.seal ( object ) => object

This method seals the object from maniplation when it comes the adding and removing properties. Existing properties can still be changed. The properties get fixed in other words.

```js
const country = {
  name: "Sweden",
  weather: "Ice cold",
  population: 1000,
  location: { long: 163489, lat: 124192739 },
};

Object.seal(country);

country.name = "Denmark"; // Works
country.colors = "Blue and yellow"; // Won't work.
```

[Back to top](#javascript-objects)

### Object.isSealed ( object ) => boolean

Checks if the object is sealed or not. Returns a boolean.

[Back to top](#javascript-objects)
