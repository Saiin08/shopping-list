const items = [
  {
    name: "apples",
    amount: 5,
  },
  {
    name: "bananas",
    amount: 4,
  },
  {
    name: "milk",
    amount: "1kg",
  },
  {
    name: "bread",
    amount: 6,
  },
];

const renderList = () => {
  const listElm = document.querySelector(".list");
  listElm.innerHTML = "";
  items.forEach((item) => {
    listElm.innerHTML += `
    <div class="item">
    <span>${item.name}, ${item.amount}</span>
    <button class="remove">remove</button>
    </div>
    `;
  });

  const removeEl = document.querySelectorAll(".remove");
  removeEl.forEach((btnn, index) => {
    btnn.addEventListener("click", () => {
      items.splice(index, 1);
      renderList();
    });
  });
};

const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", (event) => {
  const itemName = document.querySelector(".name").value;
  const itemAmount = document.querySelector(".amount").value;
  items.push({
    name: itemName,
    amount: itemAmount,
  });
  renderList();
  event.preventDefault();
});

renderList();
