var ball;
var db,position
function setup(){
    createCanvas(500,500);
    db=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locationoftheball=db.ref('Ball/Position');
    locationoftheball.on("value",readop,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  db.ref('Ball/Position').set({
      x:ball.x+x,y:ball.y+y
  })

}
function readop(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function showerror(){
    console.log("Pratt")
}