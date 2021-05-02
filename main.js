objects = [];
images = [];
img = "";
img_no = 0;
status = "";

function preload() {
    images = [loadImage('Image-1.jpg'), loadImage('Image-2.jpg'), loadImage('Image-3.jpg'),
              loadImage('Image-4.jpg'), loadImage('Image-5.jpg'), loadImage('Image-6.jpg')];
    console.log(images.length);
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(570, 270)

    Model = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    document.getElementById("object_no").innerHTML = "";
}

function draw() {
    if (img_no == 0) {
        image(images[0], 0, 0, 400, 400);
        img = images[0];
    }
    else if (img_no == 1) {
        image(images[1], 0, 0, 400, 400);
        img = images[1];
    }
    else if (img_no == 2) {
        image(images[2], 0, 0, 400, 400);
        img = images[2];
    }
    else if (img_no == 3) {
        image(images[3], 0, 0, 400, 400);
        img = images[3];
    }
    else if (img_no == 4) {
        image(images[4], 0, 0, 400, 400);
        img = images[4];
    }
    else if (img_no == 5) {
        image(images[5], 0, 0, 400, 400);
        img = images[5];
    }

    if (status == true) {
        for (i = 0; i < objects.length; i++) {
            fill('#FF0000');
            text(objects[i].label, objects[i].x, objects[i].y);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function loaded() {
    console.log("Coco Is Ready");
    Model.detect(img, gotResults);
}

function gotResults(error, results) {
    status = true;
    objects = results;
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
    document.getElementById("status").innerHTML = "Status = Objects Detected";
    document.getElementById("object_no").innerHTML = "Objects Detected = " + objects.length;
}

function next() {
    if (img_no == 5) {
        img_no = 0;
    }
    else {
        img_no = img_no + 1;
    }
    console.log("Added No = " + img_no);
    setup();
}

function pervious() {
    if (img_no == 0) {
        img_no = 5;
    }
    else {
        img_no = img_no - 1;
    }
    console.log("Subtracted No = " + img_no)
    setup();
}