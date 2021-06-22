var canvas;
var music;
var fixedrect, fixedrect2, fixedrect3, fixedrect4;
var movingrect;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);
    fixedrect = createSprite(120, 570, 130, 20);
    fixedrect.shapeColor = "cyan";
    fixedrect2 = createSprite(300, 570, 130, 20);
    fixedrect2.shapeColor = "pink";
    fixedrect3 = createSprite(500, 570, 130, 20);
    fixedrect3.shapeColor = "yellow";
    fixedrect4 = createSprite(680, 570, 130, 20);
    fixedrect4.shapeColor = "lime";
    movingrect = createSprite(500, 300, 40, 40);
    movingrect.shapeColor = "white";
    movingrect.velocityX = 5;
    movingrect.velocityY = 5;
}

function draw() {
    background(0);
    edges = createEdgeSprites();
    movingrect.bounceOff(edges);

    if (fixedrect.isTouching(movingrect) && movingrect.bounceOff(fixedrect)) {
        movingrect.shapeColor = "cyan";
        music.play();
    }

    if (fixedrect2.isTouching(movingrect)) {
        movingrect.shapeColor = rgb(pink);
        movingrect.velocityX = 0;
        movingrect.velocityY = 0;
        music.stop();
    }

    if (fixedrect3.isTouching(movingrect)) {
        movingrect.shapeColor = "yellow";
        music.play();
    }

    if (fixedrect4.isTouching(movingrect)) {
        movingrect.shapeColor = "lime";
        music.play();
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}