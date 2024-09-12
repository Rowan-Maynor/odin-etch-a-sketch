const divGridContainer = document.querySelector("#divGridContainer");

// Try using loop to take in a value X, and loop X times creating X rows, and 
// X collumns per row
function initialSetup() {
    for(let i = 0; i < 16; i++){
        const div = document.createElement("div");
        div.id = `div${i}`;
        div.style = "flex: 1; border: solid;";
        divGridContainer.appendChild(div);
    }
}

initialSetup();