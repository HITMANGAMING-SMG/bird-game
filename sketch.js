    var bird;
    var pipes = [];
    var backgroundimg;
    //var pipesimg;
    var birdIMG;
    var canvasWidth, canvasHeight;
    var score;
    var gameState = PLAY;
    var PLAY = 1;
    var END = 0;
    var gameOver,resetIMG;

    function preload() {

      backgroundimg = loadImage("bg1.jpg");
      //  pipesimg = loadImage("pipes.png");
      birdIMG = loadImage("bird.png");
      gameOver = loadImage("  Game_over.png");
      resetIMG = loadImage("reset.png");


    }


    function setup() {
      canvasWidth = windowWidth;
      canvasHeight = windowHeight;

      createCanvas(canvasWidth, canvasHeight);
      bird = new Bird();
      pipes.push(new Pipe());

      score = 0;

    }



    function draw() {
      background(backgroundimg);
      bird.update();
      bird.show();
    stroke (255,255,10);
    strokeWeight(10);



      if (gameState===Play){
      
        if (frameCount % 120 == 0) {
          pipes.push(new Pipe());
    
        }
    
        if (frameCount % 120 == 0) {
        score = score + 16;
    
        }

        for (var i = pipes.length - 1; i >= 0; i--) {

          pipes[i].show();
          pipes[i].update();                 
    
        
    
          if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
          }
    
        }
        function keyPressed() {

          if (keyCode === 32) {  
            bird.up();
          }
      
        
        }
        
        if (pipes[i].hits(bird)) {
          console.log("ouch");
          score = score -1;
          gameState = End;
        }

      } else if (gameState === End){
        gameOver.visible = true;
        resetIMG.visible = true;

      
       
        reset();
      

      }


      push();
      fill(0);
      stroke(0,0,0);
    strokeWeight(1);
      textSize(20);
    text("Score: " + score ,canvasWidth*9/10,canvasHeight*0.5/10);
    pop();
    }

    function reset() {
      gameState = PLAY;
      score = 0;
    
    }



