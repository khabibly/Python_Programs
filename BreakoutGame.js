var NUM_ROWS = 8;
var CURRENT_ROW = 1;
var START_ROW = CURRENT_ROW;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var NUM_TOTAL_BRICKS = 0;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;
var BRICK_COLOR = 1;
var brick;
var brickX = 0 + BRICK_SPACING;
var brickY = 0 + BRICK_TOP_OFFSET;
var PADDLE_WIDTH = 100;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;
var paddle;
var winCheck = 80;
var speedMod = 50;
var BALL_RADIUS = 15;
var ball;
var dx = 4;
var dy = 4;
var elem;
var life = 3;
var lives = new Text(life , "30pt Arial");
lives.setPosition(0, getHeight()/2);
add(lives);
var bar = new Rectangle(getWidth(), PADDLE_HEIGHT);

function start(){
    drawRows();
	addPaddle();
	mouseMoveMethod(movePaddle);
	addBall();
	begin();
}
function addPaddle(){
    paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.setPosition(getWidth()/2-PADDLE_WIDTH/2, getHeight()-PADDLE_HEIGHT-PADDLE_OFFSET);
    add(paddle);
}
function movePaddle(e){
    paddle.setPosition(e.getX() - PADDLE_WIDTH / 2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    if(e.getX()<=PADDLE_WIDTH/2){
        paddle.setPosition(0, getHeight()-PADDLE_HEIGHT-PADDLE_OFFSET);
    }else if(e.getX()>=getWidth()-PADDLE_WIDTH/2){
        paddle.setPosition(getWidth()-PADDLE_WIDTH, getHeight()-PADDLE_HEIGHT-PADDLE_OFFSET);
    }
}
function addBall(){
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(getWidth()/2, getHeight()/2);
    add(ball);
}
function action(){
    var elem = getElementAt(ball.getX(), ball.getY());
    checkBrick();
    ball.move(dx,dy);
    checkWalls();
    lives.setText(life);
    if(life <= 0){
        stopTimer(action);
        removeAll();
        var txt = new Text("You lost!", "30pt Arial");
        txt.setPosition(getWidth()/2-txt.getWidth()/2, getHeight()/2+txt.getHeight()/2);
        add(txt);
    }
    if(winCheck<=0){
        removeAll();
        var txt = new Text("You win!", "30pt Arial");
        txt.setPosition(getWidth()/2-txt.getWidth()/2, getHeight()/2+txt.getHeight()/2);
        add(txt);
        
    }
}
function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
	}
	
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		stopTimer(begin);
		ball.setPosition(getWidth()/2, getHeight()/2);
		life--;
	}
	
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
	}
	
	// Bounce off brick
	if(ball.getY() + BALL_RADIUS >= paddle.getY() - PADDLE_HEIGHT){
	    elem = getElementAt(ball.getX(), ball.getY()+ball.getRadius());
	    if(elem != null){
            dy = -dy;
           ball.setColor(paddle.getColor());
        }
	}
}
function drawRows(){
    while(NUM_TOTAL_BRICKS < NUM_BRICKS_PER_ROW){
        brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT); 
        brick.setPosition(brickX, brickY); 
       
        if(BRICK_COLOR == 1 || BRICK_COLOR == 2){
            brick.setColor(Color.red);
        }else if(BRICK_COLOR == 3 || BRICK_COLOR == 4){
            brick.setColor(Color.orange);
        }else if(BRICK_COLOR == 5 || BRICK_COLOR == 6){
            brick.setColor(Color.green);
        }else if(BRICK_COLOR == 7 || BRICK_COLOR == 8){
            brick.setColor(Color.blue);
        }
       
        add(brick);
        brickX += BRICK_WIDTH + BRICK_SPACING;
        NUM_TOTAL_BRICKS++;
       
        if(NUM_TOTAL_BRICKS >= NUM_BRICKS_PER_ROW && CURRENT_ROW != NUM_ROWS){
            brickY += BRICK_HEIGHT + BRICK_SPACING;
            brickX = 0 + BRICK_SPACING;
            CURRENT_ROW++;
            BRICK_COLOR++;
            NUM_TOTAL_BRICKS = 0;
        }
    }
}
function checkBrick(){
    //This if statement checks to make sure the
    //  ball is in the area of the bricks before removing elements.
    if(ball.getY() - BALL_RADIUS * 3 <= NUM_ROWS * BRICK_HEIGHT){
    //Checks top of the ball.
        elem = getElementAt(ball.getX(), ball.getY() - ball.getRadius());
        if(elem != null){
            dy = -dy;
            remove(elem);
            winCheck--;
            
        }
    //Checks right side.   
        elem = getElementAt(ball.getX() + ball.getRadius(), ball.getY());
        if(elem != null){
            dx = -dx;
            remove(elem);
            winCheck--;
           
        }
        elem = getElementAt(ball.getX() - ball.getRadius(), ball.getY());
    //Checks left side.    
        if(elem != null){
            dx = -dx;
            remove(elem);
            winCheck--;

        }
        elem = getElementAt(ball.getX(), ball.getY()+ball.getRadius());
    //Checks bottom.  
        if(elem != null){
            dy = -dy;
            remove(elem);
            winCheck--;
        }
    }
}
function begin(){
    setTimer(action, 20);
}
