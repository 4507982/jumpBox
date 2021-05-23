function isTouching(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y <obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
        return true;
    //obj1.shapeColor = "red";
    //obj2.shapeColor = "red";
  }
  else {
   return false;
    // obj1.shapeColor = "green";
    //obj2.shapeColor = "green";
  }
  }
  function bounceOff(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2){
        obj1.velocityX=-1*  obj1.velocityX
  
      }
      if (obj1.y - obj2.y< obj2.height/2 + obj1.height/2
        && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
          obj1.velocityY=-1*  obj1.velocityY
    
        }
  }