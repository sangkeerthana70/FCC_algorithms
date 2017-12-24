function largestOfFour(arr) {
  var finalArray = [];
	for (var i=0; i<arr.length; i++) {
		var maxVal = largestOfFour2(arr[i]);
		//console.log(maxVal);
		finalArray.push(maxVal);
	}
	console.log(finalArray);
    return finalArray;
  }


function largestOfFour2(arr) {
	var result = -Infinity;
	for (var i=0; i < arr.length; i++) {
		if (arr[i] > result) {
			result = arr[i];
		}
	}	
	//console.log(result);
	return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
