var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
color = "black";

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

ctx=canvas.getContext("2d");
ctx.lineWidth = 1;
/*ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();*/

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;

}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

/*
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseLeave";
}*/

