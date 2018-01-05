
	
	var result = slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
	console.log(result);


function slasher(arr, howMany) {
	var newArray = arr.slice(howMany);
	console.log(newArray);
	return newArray;
}
