const options = {
  name: "Petr",
  color: "red",
  arr: {
    roi: 4,
    ron: 3,
  },
  makeTest: function () {
    console.log("test");
  },
};


const { roi, ron } = options.arr;
console.log(options.arr.roi);
console.log(ron);

// console.log(Object.keys(options).length);
