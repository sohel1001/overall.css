
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
