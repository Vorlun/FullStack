const textInput = document.getElementById("add");
const btn = document.getElementById("add-btn");
const items = document.getElementById("lists");

let lists = [];

const add = () => {
  let item = textInput.value.trim();
  if (item) {
    const newItem = {
      id: lists.length === 0 ? 1 : lists.at(-1)?.id + 1,
      text: item,
    };
    lists.push(newItem);
    textInput.value = "";
    displey(); 
  }
};

const displey = () => {
  items.innerHTML = lists
    .map(
      (val) => `
                <div class="items">
                    <div class="text">${val.text}</div>
                    <div>
                        <span class="material-symbols-outlined" onclick="editItem(${val.id})"> edit </span>
                        <span class="material-symbols-outlined" onclick="deleteItem(${val.id})"> delete </span>
                    </div>
                </div>
            `
    )
    .join("");
};

const deleteItem = (id) => {
  lists = lists.filter((item) => item.id !== id);
  displey();
};

const editItem = (id) => {
  let newText = prompt("Yangi matn kiriting:");
  if (newText) {
    lists = lists.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    displey();
  }
};
