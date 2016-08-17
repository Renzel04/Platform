
function run() 
{  
    context.fillStyle = "#ccc";    
    context.fillRect(0, 0, canvas.width, canvas.height);    
    var deltaTime = getDeltaTime();    
    
    player.update(deltaTime);  
    player.draw();      
    
        // update the frame counter   
    fpsTime += deltaTime;  fpsCount++;  
    if(fpsTime >= 1)  
    {   
        fpsTime -= 1;   
        fps = fpsCount;   
        fpsCount = 0;  
    }       
    // draw the FPS  
    context.fillStyle = "#f00";  
    context.font="14px Arial";  
    context.fillText("FPS: " + fps, 5, 20, 100); 
} 
Player.prototype.update = function(deltaTime) 
{    
    if( typeof(this.rotation) == "undefined" )   
            this.rotation = 0;      // hang on, where did this variable come from!     
    
    if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)  
    {   
        this.rotation -= deltaTime;  
    }  else  
    {   
        this.rotation += deltaTime;  
    } 
} 