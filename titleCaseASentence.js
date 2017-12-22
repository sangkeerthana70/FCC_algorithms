//Pseudocode
//input= String of a sentence, Eg:("I'm a little tea pot")
//output = String with each first letter of the word in upper case. 
//eg:(I'm A Little Tea Pot)
//1) split the string
//2)Iterate every element in the array using for loop to get the first letter using string() method.
//3)Then get the rest of the letters in the same word.

function titleCase(str) {
  var strSplit = str.split(" ");
	//console.log(strSplit);
	var currWord;
	var firstLetter;
	var remainingLetters;
	var firstLetterUpper;
	var result = "";
    
	for (var i=0; i<strSplit.length; i++) {
		currWord = strSplit[i];
	   // console.log(currWord);
		firstLetter = currWord.substring(0,1);//to get the first letter
		//console.log(firstLetter);
		remainingLetters = currWord.substring(1);// to get the rest of the letters
		//console.log(remainingLetters);
		firstLetterUpper = firstLetter.toUpperCase();//convert the first letter to uppercase.
       
	    result = result + " " + (firstLetterUpper + remainingLetters.toLowerCase());
        
	}
	//console.log(result);
	return result.trim();
}

//titleCase("I'm a little tea pot");
//titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
