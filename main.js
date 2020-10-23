canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "Race Track.png"
Car_1 = "Car_1.png";
car_2 = "Car_2.png"

Car1_x = 200;
Car1_y = 500;

Car2_x = 290;
Car2_y = 510;

Car2_height = 100;
Car2_width = 150;

Car1_height = 100;
Car1_width = 150;

function add() {
    background_of_canvas = new Image();
    console.log(background_of_canvas);
    background_of_canvas.onload = uploadBackground();
    background_of_canvas.src = background_image;

    Car_1 = new Image();
    console.log(Car_1);
    Car_1.onload = uploadCar1();
    Car_1.src = "Car_1.png";

    Car_2 = new Image();
    console.log(Car_2);
    Car_2.onload = uploadCar2();
    Car_2.src = "Car_2.png";


}

function uploadBackground() {
    ctx.drawImage(background_of_canvas, 0, 0, canvas.width, canvas.height);
    console.log("uploaded")
}

function uploadCar1() {
    ctx.drawImage(Car_1, Car1_x, Car1_y, Car1_width, Car1_height);
    console.log("uploaded1")
}

function uploadCar2() {
    ctx.drawImage(Car_2, Car2_x, Car2_y, Car2_width, Car2_height);
    console.log("uploaded2")
}


window.addEventListener("keydown", key_press);

/*Car_1 Functions*/

function key_press(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '37') {
        left();
    }

    if (keypressed == '38') {
        up();
    }

    if (keypressed == '39') {
        right();
    }

    if (keypressed == '40') {
        down();
    }

    if (keypressed == '68') {
        right2()
    }
// This is "S" 
    if (keypressed == '83') {
        down2()
    }
}

function left() {
    if (Car1_x > 0) {
        Car1_x = Car1_x - 10;
        ctx.save();
        ctx.rotate(10);
        // draw your object
        ctx.restore();
        uploadBackground();
        uploadCar1();
    }
}

function up() {
    if (Car1_y > 0) {
        Car1_y = Car1_y - 10;
        uploadBackground();
        uploadCar1();
    }
}

function right() {
    if (Car1_x < 650) {
        Car1_x = Car1_x + 10;
        uploadBackground();
        uploadCar1();
    }
}

function down() {
    if (Car1_y < 500) {
        Car1_y = Car1_y + 10;
        uploadBackground();
        uploadCar1();
    }
}



function left2() {
    if (Car2_x > 0) {
        Car2_x = Car2_x - 10;
        ctx.save();
        ctx.rotate(10);
        // draw your object
        ctx.restore();
        uploadBackground()
        uploadCar2();
    }
}

function up2() {
    if (Car2_y > 0) {
        Car2_y = Car2_y - 10;
        uploadBackground();
        uploadCar2();
    }
}

function right2() {
    if (Car2_x < 650) {
        Car2_x = Car2_x + 10;
        uploadBackground();
        uploadCar2();
    }
}

function down2() {
    if (Car2_y < 500) {
        Car2_y = Car2_y + 10;
        uploadBackground();
        uploadCar2();
    }
}
