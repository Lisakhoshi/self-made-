var database , form, player,game;
var bgimage
var gameState=0
var ques
var questionString =""
var questionNumber=1
var answerval=""

function preload(){
    bgimage=loadImage("Frontbg.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    database=firebase.database()
    form= new Form()
    game= new Game()
    ques= new Question()
}

function draw(){
    background(bgimage)
   form.display()
   
}