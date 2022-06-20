document.getElementById("button").addEventListener("click", function(){
	const palindrome = document.querySelector('#palindrome').value;
	//call the function if string isnt empty
	if (palindrome.length>0) {
		addRow(palindromeCheck(palindrome)); 
	}
});

function palindromeCheck(palindrome){
	const regex = /[^A-Za-z0-9]/g;
    const palindromeClean = palindrome.replace(regex, "").toLowerCase();
	const stringLength = palindromeClean.length;
	const result = document.getElementById("result");

	for (let counter = 0; counter < (stringLength/2) ; counter++) {
		if (palindromeClean[counter] !== palindromeClean[stringLength-1-counter]) {
			result.textContent = "Not a Palindrome!";
			console.log(palindromeClean);
			return result.textContent;
		} 
	}
	result.textContent = "Palindrome!!!"; 
	return result.textContent;
}

//currentResult is the output of palindromeCheck function, indicates whether a string is a palindrome or not
function addRow(currentResult){
	let n = 1;
	var table = document.getElementById("resultsTable");
	var NewRow = table.insertRow(n);

	palindromeInput = document.getElementById("palindrome").value;
	
	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);

	cel1.innerHTML = palindromeInput;
	cel2.innerHTML = currentResult;

	n++;
}