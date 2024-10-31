const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("List-container");

function AddTask(){
    if(inputbox.value === '')
        {
            alert("You Must Write Something");
        }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value = "";
} 