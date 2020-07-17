//1st Assignment feet to mile calculate
function feetToMile(feet){
    var mile = 5280.00 ;
     mile =  feet / mile;
    return mile.toFixed(2) ;
  }
  var result = feetToMile(5000);
  console.log(result);

  // Assignment 2  wood calculator 
  function woodCalculator(chair,table,bed){
    var totalChair = chair * 1;
    var totalTable  = table * 3;
    var totalbed = bed * 5;
    var totalWood = totalChair + totalTable +  totalbed ;
     return totalWood;
   }
    var calculate = woodCalculator( 1 , 1 ,2 );
   
   console.log("  Need tottal  " + calculate + " Cubic Wood ");

   
   //3th Assignment bricks calculator
   
   function brickCalculator(floor){
    var perfeetbricks = 1000; 
    var unicfloor10height = 15 ;
    var unicfloor20height = 12  ;
    var unicfloorover20height = 10 ;
    var tottalbricks10floar = floor10height  * 1000 * 10;
    var tottalbricks20floar  = unicfloorheight20 * 1000 * 10;
    if(num <= 10  ){
        var briksin10 = num *  unicfloor10height * perfeetbricks;
         return briksin10;
     }
    else{
        if ( num <= 20 ){
        var In20 = num-10; 
        var briksin20 =  In20 * unicfloor20height * perfeetbricks   ;
        var tottalbriksin20 = briksin20  +  tottalbricks10floar ;
        return tottalbriksin20;
      }
        else{
        var over20 = num - 20;
        var briksover20 = over20 * unicfloorover20height * perfeetbricks ;
        var tottalbriksover20 = briksover20 +  tottalbricks20floar + tottalbrick10floar ;
        return tottalbriksover20;
        }
    }
  }
  var brickscalculate = brickCalculator(40);
  console.log(brickscalculate);
   
   
    //4th Assignment find smaller name in a array 

    function tinyFriends(name){
        var smallerName  = name[0];
        for (var i = 0; i < name.length; i++){
          var currentName = name[i];
          if(currentName.length  < smallerName.length){
             smallerName  = currentName ;
      
          }
      }
      return smallerName;
      }
      var arrscheck = tinyFriend([ "Mahin","Arafat","Sumi","Ria"]);
      console.log(arrscheck);