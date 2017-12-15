function findLongestWord(str) {

	var strSplit = str.split(" ");
	console.log(strSplit);
	var currWord;
	var currLength;
	var maxLength = 0;
	for (var i=0; i<strSplit.length; i++) {
		currWord = strSplit[i];
		//console.log(currWord);
		currLength = currWord.length;
		//console.log(currLength); 
		if (maxLength < currLength){
			maxLength = currLength;
		}
	}
	console.log(maxLength);

  return maxLength;
}  
 
findLongestWord("The quick brown fox jumped over the lazy dog");
