function generateGrid (gridSize) {

    const gridContainer = document.createElement("div");
    gridContainer.id = "gridContainer";
    
    for (let i = 0; i < gridSize; i++){

        const gridRow = document.createElement("div");

        gridRow.id = `gridRow${i}`;
        gridRow.style.display = "flex";

        for(let j = 0; j < gridSize; j++){

            const gridCol = document.createElement("div");
            const gridSquareSize = 100/gridSize;

            gridCol.id = `gridCol${i}-${j}`;
            gridCol.style.height = `${gridSquareSize}vh`;
            gridCol.style.width = `${gridSquareSize}vh`;

            gridCol.addEventListener("mouseover", () =>{

                gridCol.style.backgroundColor = "black";

            });

            gridRow.appendChild(gridCol);

        }

        gridContainer.appendChild(gridRow);

    }

    document.body.appendChild(gridContainer);

}

generateGrid(16);