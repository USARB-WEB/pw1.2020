document.getElementById('calculateBut').addEventListener("click", function(){
	const x = Number(document.getElementById('x').value);
	const y = Number(document.getElementById('y').value);
	document.getElementById('result').innerHTML = x + y;
});