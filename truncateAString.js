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
