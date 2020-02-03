console.log("Hello i am a Google Chrome console");

/*Goog style*/
let numarTotalElevi = 35;
let NumarTotalElevi = 35;
let numar_total_elevi = 35;

/*BAD style!!!*/
let nrttcl = 35;
let numartotalelevi = 35; 
//let numar total elevi = 35; 

console.clear();


/**/
let x = 5;
let y = 2;
const pi = 3.14;

console.log(x + y);

x = 5;
y = "4";

console.log(x + y);


x = 5;
y = 0;

console.log(x / y);


x = "5";
y = "4";

console.log(Number(x) + Number(y));


x = "a";
y = "b";

console.log(Number(x) + Number(y));

console.clear();

let a = 0;

if(a > 0) {
	console.log("A este mai mare ca 0");
} else if(a < 0){
	console.log("A este mai mic ca 0");
} else {
	console.log("A = 0");
}

console.clear();
a = 2;
const b = "2";

if(a === b) {
	console.log("A = B");
} else {
	console.log("A nu este = B");
}


console.clear();

for(let i = 1; i < 100; i++){
	console.log(i);	
}

let i = 1;
while(i < 100){
	console.log(i);	
	i++;
}

i = 1;
do{
	console.log(i);	
	i++;
}while( i < 100);

function sum(a, b){
	console.log(b);
	return a + b;
}

console.log(1 + 2)
console.log(sum(1, 2))
console.log(sum(-1, 2))
console.log(sum(2))
