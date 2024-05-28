let todoInput = document.getElementById("todoInput");
let list = document.getElementById("list");

todoInput.addEventListener("keyup", function (param) {
    if (param.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (todoInput) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${todoInput}<i></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });

    listItem.querySelector('i').addEventListener("click", function () {
        listItem.remove();
    });

    list.appendChild(listItem);
}