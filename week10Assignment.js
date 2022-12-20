let id = 0;

document.getElementById("add").addEventListener("click", () => {
    let createdDate = new Date();
    let table = document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-item").value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById("new-item").value = '';

});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Task Completed';
    btn.onclick = () => {
        console.log(`Deleting Row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}