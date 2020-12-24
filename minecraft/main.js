var canvas=new fabric.Canvas("myCanvas");
 player_y=500;
 player_x=300;
block_height=30;
block_width=30;
var player_object="";
var block_object="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(160);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}
function blockupdate(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({top:player_y,left:player_x});
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",key_down);

function key_down(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey == true&& key_pressed == '80'){
      console.log("shit and p pressed together");
      block_width=block_width+15;
      block_height=block_height+15;
      document.getElementById("Current_width").innerHTML=block_width;
      document.getElementById("Current_height").innerHTML=block_height;  
        
    }
    if(e.shiftKey == true&& key_pressed == '77'){
        console.log("shit and m pressed together");
        block_width=block_width-15;
        block_height=block_height-15;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;  

 
}

 if (key_pressed=='38'){
     
    up();
    console.log("up");

 }   
 if (key_pressed=='40'){
     
    down();
    console.log("down");

 }  
 if (key_pressed=='37'){
     
    left();
    console.log("left");

 }  
 if (key_pressed=='39'){
     
    right();
    console.log("right");

 }  
 if (key_pressed=='87'){
     
    blockupdate('wall.jpg')
    console.log("w");

 }  
 if (key_pressed=='68'){
     
    blockupdate('dark_green.png');
    console.log("d");

 }  
 if (key_pressed=='67'){
     
    blockupdate('cloud.jpg');
    console.log("c");

 } 
 if (key_pressed=='71'){
     
    blockupdate('ground.png');
    console.log("g");

 }  
 if (key_pressed=='76'){
     
    blockupdate('light_green.png');
    console.log("l");

 }     
 if (key_pressed=='82'){
     
    blockupdate('roof.png');
    console.log("r");

 }    
 if (key_pressed=='89'){
     
    blockupdate('yellow_wall.png');
    console.log("y");
 }   
 if (key_pressed=='85'){
     
    blockupdate('unique.png');
    console.log("u");

 }  
 if (key_pressed=='84'){
     
    blockupdate('trunk.jpg');

 }                                
}

function up(){
   if(player_y>=0){
    
    player_y=player_y-block_height;
    console.log("block_height"+block_height);
    console.log("up ,x= "+player_x + "y= "+player_y);
    canvas.remove(player_object);
    playerupdate();  

   }
}

function down(){
   if(player_y<=450){
    
    player_y=player_y+block_height;
    console.log("block_height"+block_height);
    console.log("up ,x= "+player_x + "y= "+player_y);
    canvas.remove(player_object);
    playerupdate();  

   }
}

function left(){
   if(player_x>=0){
    
    player_x=player_x-block_width;
    console.log("block_height"+block_width);
    console.log("up ,x= "+player_x + "y= "+player_y);
    canvas.remove(player_object);
    playerupdate();  

   }
}
function right(){
   if(player_x<=840){
    
    player_x=player_x+block_width;
    console.log("block_height"+block_width);
    console.log("up ,x= "+player_x + "y= "+player_y);
    canvas.remove(player_object);
    playerupdate();  

   }
}