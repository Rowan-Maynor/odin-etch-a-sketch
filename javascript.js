function generateGrid (gridSize) {
    console.log("Function Ran");
    for (let i = 0; i < gridSize; i++){
        console.log("Creating divRow");
        const gridRow = document.createElement("div");
        gridRow.id = `gridRow${i}`;
        gridRow.style.display = "flex";
        console.log("divRow Created");

        for(let j = 0; j < gridSize; j++){
            const gridCol = document.createElement("div");
            const gridSquareSize = 100/gridSize;
            gridCol.id = `gridCol${i}-${j}`;
            gridCol.style.height = `${gridSquareSize}vh`;
            gridCol.style.width = `${gridSquareSize}vh`;
            gridCol.style.border = "solid";
            gridRow.appendChild(gridCol);
        }

        document.body.appendChild(gridRow);
    }

}

generateGrid(5);