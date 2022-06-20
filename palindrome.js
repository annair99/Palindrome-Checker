document.getElementById("button").addEventListener("click", function(){
	const palindrome = document.querySelector('#palindrome').value;
	palindromeCheck(palindrome);
});

function palindromeCheck(palindrome){
	const regex = /[^A-Za-z0-9]/g;
    const palindromeClean = palindrome.replace(regex, "").toLowerCase();
	const stringLength = palindromeClean.length;
	const result = document.getElementById("result");
	
	let lastIndex = 1;

	for (let counter = 0; counter < (stringLength/2) ; counter++) {
		if (palindromeClean[counter] != palindromeClean[stringLength-lastIndex]) {
			result.textContent = "Not a Palindrome!";
			return;
		} else {
			lastIndex++;
		}
	result.textContent = "Palindrome!!!"; 
	}
}