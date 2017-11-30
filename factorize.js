function factorialize(inNum) {
   
  var i;
  var result=1;
 for (i=1; i <= inNum; i++){
     console.log("now i is",i);
 result = result * i;
}
return result;
}

factorialize(5);
