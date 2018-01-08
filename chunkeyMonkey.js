function chunkArrayInGroups(arr, size) {
	var result = [];
	var tempArray = [];
	for(var i=0; i<arr.length; i=i+size) {
		//console.log(i);
		//console.log(size);
		tempArray = arr.slice(i,i+size);
		//console.log(tempArray);
		result.push(tempArray);// push inside the for loop to capture two sets of arrays.
	}
	
	return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));



