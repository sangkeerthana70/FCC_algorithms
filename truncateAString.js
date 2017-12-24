/*
Pseudocode:
1) create a variable.
2) store the sliced characters with the second argument number(-3 for the 3 dots at the end) as the index for the slice.
3) return the new variable and add ... to the end.
*/ 
function truncateString(str, num) {
var strAt;
var strBt;
var strLen;
strLen = str.length;
console.log(strLen);
	
	if ((strLen-num)<=3) {
		strBt = str.slice(0,num);
		console.log(strBt);
		strAt = strBt;
		console.log(strAt);
	}
	else {
		strBt = str.slice(0,num-3);
		console.log(strBt);
		strAt = strBt + "...";
		console.log(strAt);
		return strAt;
	}
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
