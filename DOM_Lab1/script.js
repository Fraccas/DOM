window.addEventListener('DOMContentLoaded', function () {

    let headerContainer = document.createElement('div'); // create a <h2> element
    headerContainer.className = "header-container";
    document.body.appendChild(headerContainer); // add the header div to the document body

    for (i = 1; i < 7; i++) {
        let h = document.createElement('h' + i);
        let headerText = document.createTextNode('This is an h' + i);
        h.className = "h" + i + " headerGroup";
        h.appendChild(headerText);
        headerContainer.appendChild(h);

        h.addEventListener("click", function() {
            changeColor(h);
        });
    }

    function changeColor(element) {
        let colorNum = Math.floor(Math.random() * 8);
        element.style.color = colorArray[colorNum];
    }

    let colorArray = ["Black", "Green", "Blue", "Red", "Yellow", "Purple", "Grey", "Orange"];
    
    let clickCount = 1;
    let listButton = document.getElementById("listButton");
    listButton.addEventListener("click", insertListItem);

    function insertListItem () {
        let item = document.createTextNode("This is list item " + clickCount);
        let listDiv = document.createElement('div');
        listDiv.appendChild(item);
        document.body.appendChild(listDiv);
        clickCount++;

        listDiv.addEventListener("click", function () {
           changeColor(listDiv);
        });

        listDiv.addEventListener("dblclick", function () {
            listDiv.remove();
         });
    }

});



