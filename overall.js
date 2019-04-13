

                                // dynamic font color    ;)

red = 255;
blue = 0;
green = 0;
dc= document.getElementsByClassName("dynamicColor");
setInterval(function ()
    {
        if (red == 255 && green < 255 && blue == 0) {
            green = green + 5;
            changeColor(red, green, blue);
        }
        else if (red > 0 && green == 255 && blue == 0) {
            red = red - 5;
            changeColor(red, green, blue);
        }
        else if (red == 0 && green == 255 && blue < 255) {
            blue = blue + 5;
            changeColor(red, green, blue);
        }
        else if (red == 0 && green > 0 && blue == 255) {
            green = green - 5;
            changeColor(red, green, blue);
        }
        else if (red < 255 && green == 0 && blue == 255) {
            red = red + 5;
            changeColor(red, green, blue);
        }
        else if (red == 255 && green == 0 && blue > 0) {
            blue = blue - 5;
            changeColor(red, green, blue);
        }

}, 80)
function changeColor(r, g, b) {
    dc[0].style.color = "rgb(" + r + "," + g + "," + b + ")";
}






                                            // dynamic Gradient   ;)

var dyngrd = document.getElementsByClassName("dynamicGradient")
r1 = 255;
b1 = 0;
g1 = 0;
setInterval(function () {
    if (r1 == 255 && g1 > 0 && b1 == 0) {
        g1 = g1 - 5;
        changeColor(r1, g1, b1);
    }
    else if (r1 < 255 && g1 == 255 && b1 == 0) {
        r1 = r1 + 5;
        changeColor(r1, g1, b1);
    }
    else if (r1 == 0 && g1 == 255 && b1 > 0) {
        b1 = b1 - 5;
        changeColor(r1, g1, b1);
    }
    else if (r1 == 0 && g1 < 255 && b1 == 255) {
        g1 = g1 + 5;
        changeColor(r1, g1, b1);
    }
    else if (r1 > 0 && g1 == 0 && b1 == 255) {
        r1 = r1 - 5;
        changeColor(r1, g1, b1);
    }
    else if (r1 == 255 && g1 == 0 && b1 < 255) {
        b1 = b1 + 5;
        changeColor(r1, g1, b1);
    }

}, 60)
function changeColor(r1, g1, b1) {
    var r1g1b1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
}





// another




r2 = 255;
b2 = 0;
g2 = 0;
setInterval(function () {
    if (r2 == 255 && g2 < 255 && b2 == 0) {
        g2 = g2 + 5;
        changeColor2(r2, g2, b2);
    }
    else if (r2 > 0 && g2 == 255 && b2 == 0) {
        r2 = r2 - 5;
        changeColor2(r2, g2, b2);
    }
    else if (r2 == 0 && g2 == 255 && b2 < 255) {
        b2 = b2 + 5;
        changeColor2(r2, g2, b2);
    }
    else if (r2 == 0 && g2 > 0 && b2 == 255) {
        g2 = g2 - 5;
        changeColor2(r2, g2, b2);
    }
    else if (r2 < 255 && g2 == 0 && b2 == 255) {
        r2 = r2 + 5;
        changeColor2(r2, g2, b2);
    }
    else if (r2 == 255 && g2 == 0 && b2 > 0) {
        b2 = b2 - 5;
        changeColor2(r2, g2, b2);
    }

}, 50)


// degree  ;)


var degree = 0
setInterval(function () {
    degree = degree + 1
}, 80);
function changeColor2(r2, g2, b2) {


    dyngrd[0].style.background = "linear-gradient(" + degree + "deg," + "rgb(" + r1 + "," + g1 + "," + b1 + ")" + "," + "rgb(" + r2 + "," + g2 + "," + b2 + ")" + ") fixed";

}












