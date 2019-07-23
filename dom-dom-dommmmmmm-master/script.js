window.addEventListener('DOMContentLoaded', function () {  
    // main container for all elements
    let headerContainer = document.createElement('div'); 
    headerContainer.className = "container";
    document.body.appendChild(headerContainer); // add the header div to the document body

    let buttonS = document.createElement('button');
    let bsText = document.createTextNode('Add Square');
    buttonS.appendChild(bsText);
    headerContainer.appendChild(buttonS);

    let rowDiv = document.createElement('div');
    rowDiv.className = "row";
    headerContainer.appendChild(rowDiv);

    let sCount = 0;
    buttonS.addEventListener('click', function () {
        let squareDiv = document.createElement('div');
        squareDiv.className = "squareDiv";
        squareDiv.id = sCount;

        let sText = document.createTextNode(squareDiv.id);
        squareDiv.appendChild(sText);

        rowDiv.appendChild(squareDiv);
        sCount++;

        // change color on click
        squareDiv.addEventListener('click', function () {
            ChangeColor(squareDiv)
        });

        // remove square on dbl click
        squareDiv.addEventListener('dblclick', function () {
            //console.log("double click");
            let dSquares = document.getElementsByClassName("squareDiv");
            console.log(dSquares.length);
            
            let found = false, even = false;
            if (squareDiv.id % 2 == 0) { // even
                even = true;
                for (let s of dSquares) {
                    if (s.id > squareDiv.id) {
                        s.remove();
                        found = true;
                        return;
                    } 
                }
            } else { // odd
                even = false;
                for (let i = dSquares.length-1; i > -1; i--) { // count backwards to find one before
                    if (dSquares[i].id < squareDiv.id) {
                        console.log(dSquares[i].textContent);
                        dSquares[i].remove();
                        found = true;
                        return;
                    } 
                }
            }
            if (!found && even) alert("There are no squares after this square!");
            if (!found && !even) alert("There are no squares before this square!");
       
        });
    });

});

let colors = ["Red", "Green", "Blue", "Black", "Purple"];
function ChangeColor(element) {
    let rColor = Math.floor(Math.random() * 5);
    element.style.backgroundColor = colors[rColor];
}