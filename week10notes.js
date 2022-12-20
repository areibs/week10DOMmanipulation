//get element by id method
//let button = document.getElementById("my-button");
//console.log(button);



//finding elements by tag names
//let buttonsByTag = document.getElementsByTagName("button");
//console.log(buttonsByTag)


//finding elements by class names
//let buttonsByClassName = document.getElementsByClassName("my-class");
//console.log(buttonsByClassName)

///FINDING ELEMENTS BY CSS SELECTORS

//let buttonsByCSSSelector = document.querySelectorAll("button.my-class");//could also do (".my-class") to select all of the items with my-class 
//console.log(buttonsByCSSSelector);

//interacting with the DOM
let button = document.getElementById("btn");
let content = document.getElementById("content");

button.addEventListener("click", () => {
    if (content.innerHTML == "Goodbye.") {
        content.innerHTML = "Hello.";
    } else {
        content.innerHTML = "Goodbye."
    }
}
)
document.getElementById("content").innerHTML = "Goodbye.";

document.getElementById("remove").addEventListener("click", () => {
    let idToRemove = document.getElementById("remove-id").value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(content);
    document.getElementsById("remove-id").value = " ";
});

let id = 0;



document.getElementById("add").addEventListener("click", () => {
    var parent = document.getElementById("paragraphs");
    var newElement = document.createElement("p");
    newElement.innerHTML = document.getElementById("new-text").value;
    newElement.setAttribute("id", id++);
    parent.appendChild(newElement);
    document.getElementById("new-text").value = " ";
})



///   <div id="p-div"></div>
// <input id="p-input" type="text" placeholder="New Paragraph">
///<button id="p-button">Create</button>
