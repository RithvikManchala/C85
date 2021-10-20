canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 100;
rover_width = 100;

rover_X = 10;
rover_Y = 10;

images=["nasa_image_1.jpg" , "nasa_image_2.jpeg" , "nasa_image_3.jpg" , "nasa_image_4.jpg"]

random_images = Math.floor(Math.random()*4);
background_image = images[random_images];
rover_image = "rover.png";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadRover()
{
ctx.drawImage(rover_imgTag , rover_X , rover_Y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if (keyPressed == 38)
    {
        up();
        console.log(up);
    }
    if (keyPressed == 40)
    {
        down();
        console.log(down);
    }
    if (keyPressed == 37)
    {
        left();
        console.log(left);
    }
    if (keyPressed == 39)
    {
        right();
        console.log(right);
    }
}

function up()
{
    if(rover_Y >= 0)
    {
       rover_Y = rover_Y -10;
       console.log("position of rover_Y and rover_X");
       uploadBackground();
       uploadRover();
    }
}

function down()
{
    if(rover_Y <= 500)
    {
        rover_Y = rover_Y +10;
        console.log("position of rover_Y and rover_X");
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(rover_X >= 0)
    {
        rover_X = rover_X -10;
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(rover_X <= 700)
    {
        rover_X = rover_X +10;
        uploadBackground();
        uploadRover();
    }
}
