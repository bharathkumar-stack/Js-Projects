const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("your must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document
            .createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
//function to make clear or check and uncheck
ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//code to store data locally even after refresh
function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);

}
//fucntion to shoe data onto the screen even after referesh
function showTask() {
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();