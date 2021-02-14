//create a list/array of colors
//remember sapces in rgb format are important
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

//select all 6 of these squares
var squares = document.querySelectorAll(".square");
//selecting a color from the given 6 colors
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//loop thru squares and assign a color from the colors array
for (var i = 0; i < squares.length; i++) {
    //add initial colors to sqaures
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            alert("Correct!");
        } else {
            alert("WRONG!!!");
        }
    });
}