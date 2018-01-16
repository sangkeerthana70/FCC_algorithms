 function mutation(arr) {
	var firstStr = arr[0].toLowerCase();
	console.log(firstStr);
	var secondStr=arr[1].toLowerCase().split("");//first split the 'hey' string into array for looping through.
	console.log(secondStr);
	for(var i=0; i<secondStr.length; i++) {
		var n = firstStr.indexOf(secondStr[i]);
		//console.log("i is " + i);
		console.log(secondStr[i]);//check if each character in the secondStr is present in the first string.
	//	console.log("n is " + n);
      
		if (n == -1) {
			return false;
		}
	}
	return true;
}
console.log(mutation(["hello", "hey"]));