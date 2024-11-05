const person = {
  firstName: "Niklas",
  lastName: "Fähnrich",
  fullName: function () {
    const fullName = this.firstName + " " + this.lastName;
    console.log(fullName);
  },
};

person.fullName();
