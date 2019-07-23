let singB = document.getElementById('singB');
let friends = ["D2", "Toast", "Van", "Dat Boi", "Duck"];

// output to console
singB.addEventListener('click', function() {
    for (let f of friends) {
        let friendD = document.createElement("div");
        friendD.className = "friend";
        let fH3 = document.createElement("h3");
        let fh3Text = document.createTextNode(f);
        fH3.appendChild(fh3Text);
        friendD.appendChild(fH3);
        document.body.appendChild(friendD);

        for (var i = 99; i > 0; i--) {
            let songLine = "";
            if (i === 2) {
                songLine = i + " lines of code in the file, " + i + " lines of code; " + 
                f + " strikes one out, clears it all out, " + (i-1) + " line of code in the file";
            } else if (i === 1) {
                songLine = i + " line of code in the file, " + i + " line of code; " + 
                f + " strikes one out, clears it all out, no more lines of code in the file";
            } else {
                songLine = i + " lines of code in the file, " + i + " lines of code; " + 
                f + " strikes one out, clears it all out, " + (i-1) + " line of code in the file";    
            }
            let songPara = document.createElement("p");
            let songLT = document.createTextNode(songLine);
            songPara.appendChild(songLT);
            friendD.appendChild(songPara);
        }
    }
});