
function printKey(element) {
    const str = element.textContent;
    console.log("The " + "'" + str + "' " + "key is pressed");
}
document.addEventListener("keydown", function (event){
    if (event.code === "KeyA"){
        printKey(document.getElementById("keyA"));
        let audio = new Audio("A.mp3");
        audio.play();
    } else if (event.code ==="KeyS"){
        printKey(document.getElementById("keyS"));
        let audio = new Audio("S.mp3");
        audio.play();
    } else if (event.code ==="KeyD"){
        printKey(document.getElementById("keyD"));
        let audio = new Audio("D.mp3");
        audio.play();
    } else if (event.code ==="KeyF"){
        printKey(document.getElementById("keyF"));
        let audio = new Audio("F.mp3");
        audio.play();
    } else if (event.code ==="KeyG"){
        printKey(document.getElementById("keyG"));
        let audio = new Audio("G.mp3");
        audio.play();
    } else if (event.code ==="KeyH"){
        printKey(document.getElementById("keyH"));
        let audio = new Audio("H.mp3");
        audio.play();
    } else if (event.code ==="KeyJ"){
        printKey(document.getElementById("keyJ"));
        let audio = new Audio("J.mp3");
        audio.play();
    } else if (event.code ==="KeyW"){
        printKey(document.getElementById("keyW"));
        let audio = new Audio("W.mp3");
        audio.play();
    } else if (event.code ==="KeyE"){
        printKey(document.getElementById("keyE"));
        let audio = new Audio("E.mp3");
        audio.play();
    } else if (event.code ==="KeyT"){
        printKey(document.getElementById("keyT"));
        let audio = new Audio("T.mp3");
        audio.play();
    } else if (event.code ==="KeyY"){
        printKey(document.getElementById("keyY"));
        let audio = new Audio("Y.mp3");
        audio.play();
    } else if (event.code ==="KeyU"){
        printKey(document.getElementById("keyU"));
        let audio = new Audio("U.mp3");
        audio.play();
    }
});