const but = document.querySelector("button");
const deleteElement = (e) => {
  console.log(e.target);
};

but.addEventListener("click", deleteElement);
but.removeEventListener("click", deleteElement);
