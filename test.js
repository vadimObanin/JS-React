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

const a = 3;
const b = a;

function copy(mainObj) {
  const objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 4,
  b: 3,
  c: {
    v: 9,
    m: 5,
  },
};
const newNumbers = copy(numbers);
