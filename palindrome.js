var tempStr;
var tempStr2;
var tempStr3;
var tempStr4;


function palindrome(str) {
	console.log(str);
	var tempStr = str.toLowerCase();
	console.log(tempStr);
	tempStr = tempStr.replace(/ /g,"");	
	console.log(tempStr);
	tempStr = tempStr.replace(/,/g,"");	//alphanumeric chars removed
	console.log(tempStr);
	tempStr = tempStr.replace(/\./g,"");	//escape . as it has special meaning regular expession
	console.log(tempStr);
	tempStr2 = tempStr.split('');
	console.log(tempStr2);
	var tempStr3 = tempStr2.reverse('');
	console.log(tempStr2);
	var tempStr4 = tempStr3.join('');//join method joins the elements from an array into a string.
	console.log(tempStr4);
	console.log(str);
	if (tempStr === tempStr4) { // compare tempStr(after removing  alphanumeric) with tempStr4 (after split,reverse and join.
		return true;
	}
	else {return false;}
}
console.log(palindrome("A man, a plan, a canal. Panama"));	
	
	