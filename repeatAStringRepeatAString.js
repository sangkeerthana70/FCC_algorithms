function repeatStringNumTimes(str, num) {
  
	var result = "";
	console.log(str);
	for (i=0; i<num; i++) {
      result = result + str;
	}
	console.log(result);
		
  
  return result;
}
  


repeatStringNumTimes("abc", 3);
