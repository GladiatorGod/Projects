//start
var algoName = document.getElementById("algo").value;
var head = document.querySelector(".heading");


function headerDisplay(algoName) {
    if (algoName == "bfs") {
        head.innerHTML = "Breadth First Search  [O(V+E)]"
    } else if (algoName == "dfs") {
        head.innerHTML = "Depth First Search  [O(V+E)]"
    }
  }

  function algoSelected() {
    algoName = document.getElementById("algo").value;
    headerDisplay(algoName);
  }

  
// draw Board
setInterval(draw, 10);
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;

//reset grid and clear Path
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("clear").addEventListener("click", clearPath);


// Place Source And Destination
document.getElementById("start").addEventListener("click", () => {
    placeSource = true;
});
document.getElementById("end").addEventListener("click", () => {
    placeDestination = true;
});
drawStartAndEnd();


// Maze
document.getElementById("random-maze").addEventListener("click", randomMaze);

// Visualize Button
document.getElementById("visualize").addEventListener("click", visualize);

async function visualize() {
    let algoName = document.getElementById("algo").value;

    let Search = checkSearchAlredyImplemented();

    if (Search) {
        alert("Please Clear The Path First !")
    } else {
        if (algoName === "") {
            alert("Please Choose the Algorithm First !");
        } else if (algoName == "bfs") {
            console.log(algoName);
            disableButtons();
            await breadthFirstSearch();
            enableButtons();
        } else if (algoName == "dfs") {
            console.log(algoName);
            disableButtons();
            await depthFirstSearch();
            enableButtons();
        } 
    }
}

// Visited Node Display
const visitedResult = document.getElementById("visited");

// Result Not Found Display
const displayResult = document.getElementById("result");

// Window Size
var windowSize = window.matchMedia("(max-width: 1000px)")
setSize(windowSize);
windowSize.addListener(setSize)