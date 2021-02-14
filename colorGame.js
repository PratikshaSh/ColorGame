//create a list/array of colors
//remember sapces in rgb format are important
var colors = generateRandomColors(6);

//select all 6 of these squares
var squares = document.querySelectorAll(".square");
//selecting a color from the given 6 colors
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(6);

    //pick a new random color from array
    pickedColor = pickColor();

    //change colorDiaplace to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    //change heading background color back to normal
    h1.style.backgroundColor = "#232323";
});


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
        //console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });


}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256)
        //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256)

    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256)
        //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}