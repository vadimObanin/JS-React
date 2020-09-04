const options = {
  name: "Petr",
  color: "red",
  arr: {
    roi: 4,
    ron: 3,
  },
};

for (let variable in options) {
  console.log(`Ключ массива ${variable} имеет значение ${options[variable]}`);
}
