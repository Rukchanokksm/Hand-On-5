// console.log("hello");

const getList = document.getElementById("to-Do-list");

const submitOrder = document.getElementById("submit");

const listcom = document.getElementById("list-order");

submitOrder.addEventListener("click", (e) => {
  e.preventDefault();
  const newList = document.createElement("div");
  const underNewList = document.createElement("button");
  if (!getList.value) {
    alert("Add some To do list.");
  } else {
    // add element li
    newList.innerHTML = `<li> ${getList.value} </li>`;
    listcom.appendChild(newList);
    newList.addEventListener("click", () => {
      newList.classList.toggle("newtext");
    });
    // add delete button function
    underNewList.innerText = `Delete`;
    newList.append(underNewList);
    underNewList.addEventListener("click", () => {
      newList.remove();
    });
  }
});
