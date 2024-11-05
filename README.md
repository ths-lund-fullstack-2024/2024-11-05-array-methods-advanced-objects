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
  - [Spread Syntax](#spread-syntax)

</details>

## What is an object?

An object can be described as its counterpart in real life. Take a car for example, it is an object and it has **properties** like make, model, color, engine, number of wheels and so on. It also has **methods**, (things you can do with the car), like starting the car, breaking, using the blinkers and such things.

All cars have these properties but different car of course has different values on these properties. Methods works the same way, all cars have them, although some cars might have extra methods (addons) that other cars don't have. But in general, you can do the same things with every car, like starting, like stopping and so on.

In JavaScript objects works in the same way. It has properties and methods. We have already been using objects during the last couple days without knowing about it.

**Arrays** are a type of object. It has at least one property that we know of, the `.length`. WHich represetnes the number of elements in the array. It also has methods, of which we know afew of them. `.push()`, `.pop()`, `.includes()`, `.map()` and so on. All these methods and properties are shared among all the arrays that we create in our programs.

**Strings** are also objects in JavaScript, it has properties, `.length` for example. It also has methods. We haven'nt used those yet but here is a link to more information about them: [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). You can also try them out by creating a string and then adding a period and see what pops up.

[Back to top](#javascript-objects)

### Create Object

How do we create objects? It's ather easy, we need a variable nad we need a variable name. When we assign something we don't assign a value directly but we use a pair of curly brackets instead, and later we can populate it with data.

```js
const someObject = {};
```

This is an empty object. Best practise is to use `const` when declaring an object. Object are, like arrays, passed by reference, which means the variable is just a reference _( pointer )_ to the place on the hard drive where the actual data is stored.

[Back to top](#javascript-objects)

### Properties

Let's create a car instead, and fill it with some data:

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
};
```

This car represents an object, and it has four properties. Each property represents some sort of information regarding the car. As you can see, the properties can have differnt data types and the structure comes in key-value-pairs. Keys to the left, and values to the right. Every property is seperated with a comma.

[Back to top](#javascript-objects)

### Custom Methods

An object can also have methods that represents some sort of action that the object can do. Methods are in reality just functions but as soon as a function is conntected to a specific object it becomes a method.

```js
const car = {
  make: "Volvo",
  model: "V70",
  year: 2016,
  manualTransmission: true,
  start: function () {
    console.log("The car has started");
  },
  changeGear: () => {
    console.log("Gear has been changed");
  },
};
```

[Back to top](#javascript-objects)

### "this" scope

`this` is keyword that refers to an object in JavaScript but what it is depends on the current context in which the `this` is used.

Different contexts:

- Alone, `this` refers to the global window object

- In "use strict" - mode, `this` would be undefined

- **In an object, `this` refers to the object itself**

- In a function `this` refers to the global object, unless it is created in another context.

- ...some other contexts as well

See this link for more detailed info: [w3schools - this](https://www.w3schools.com/js/js_this.asp)

The third context above is the one we are interested in.

```js
const person = {
  firstName: "Niklas",
  lastName: "Fähnrich",
  fullName: function () {
    const fullName = firstName + lastName;
    console.log(fullName);
  },
};

person.fullName();
```

In this example, `this` is used to refer to the object itself, it's own properties. If we don't use `this` inside the function's scope the function will look for the variables inside it's own scope, and since we don't have any definitions of the variables inside the function we will get a reference error. If the function doesn't find a definition of the varaible in its own scope it will look in the parent scope, which is outside of the object in this case.

[Back to top](#javascript-objects)

## Manipulating Objects

### Accessing properties and methods

[Back to top](#javascript-objects)

## Object Methods

This is basically different functions that are connected to objects in JavaScript, and all objects share these methods. A key differenc from arrays is that the array methods are available on the arrays themself. If you create an array, say `names`, if you use dot-notation on this variable all methods will be available for you. That's not the case with objects. These methods you acces by writing `Object` with a capital `O`. This `Object` is sort of the root class of all objects. Methods created in this way a called static methods. If you want read about those you can google after some information.

### Object.assign ( target, soruce ) => target object

[Back to top](#javascript-objects)

### Object.keys ( object ) => array

[Back to top](#javascript-objects)

### Object.values ( object ) => array

[Back to top](#javascript-objects)

### Object.entries ( object ) => array

[Back to top](#javascript-objects)

### Object.freeze ( object ) => object

[Back to top](#javascript-objects)

### Object.isFrozen ( object ) => boolean

[Back to top](#javascript-objects)

### Object.seal ( object ) => object

[Back to top](#javascript-objects)

### Object.isSealed ( object ) => boolean

[Back to top](#javascript-objects)

### Spread syntax

[Back to top](#javascript-objects)
