var parm2Length;
var subParm1;
function confirmEnding(parm1,parm2) {
	parm2Length = parm2.length;
	console.log(parm2Length);
	subParm1 = parm1.substr(-parm2Length);//we can use the slice method as well to give negative index values.
	console.log(subParm1);
	if (subParm1 == parm2) {
		return true;
	}
	else {
		return false;
	}
}

confirmEnding("Bastian", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("Open sesame", "same");