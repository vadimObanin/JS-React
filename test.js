const lena = {
  color: "red",
  age: 32,
  foo() {
    console.log("privet");
  },
};

const lera = Object.create(lena);
const igor = lera.foo();
console.log(igor);
