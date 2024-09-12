const divGridContainer = document.querySelector("#divGridContainer");

function initialSetup() {
    for(let i = 0; i < 16; i++){
        const div = document.createElement("div");
        div.id = `div${i}`;
        div.style = "flex: 1; border: solid;";
        divGridContainer.appendChild(div);
    }
}

initialSetup();