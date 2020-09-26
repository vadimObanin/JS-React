const but = document.querySelector("button");
const deleteElement = (e) => {
  console.log(e.target);
};

but.addEventListener("click", deleteElement);
but.removeEventListener("click", deleteElement);

const link = document.querySelector("a"); //получаем любой элемент, в данном случае ссылку
link.addEventListener("click", (e) => {
  e.preventDefault(); //отменяем стандартное поведение браузера. Обязательно первой строкой
  console.log("Privet"); // здесь мы пишем те действия которые должны быть выполнены при событии click на элемент link
});

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
