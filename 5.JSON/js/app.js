/*JSON to Object*/


const response = `
{
  "name": "Ion",
  "age": 56,
  "salary": 10242.53,
  "languages": [
    "English",
    "Russian",
    "Romanian"
  ],
  "marks":{
    "Web 1": 5.32,
    "POO 2": 9.99
  },
  "isStudent": true
}
`;

const responseObject = JSON.parse(response);
console.log(responseObject);



/*Object to JSON*/

const carObject = {
	brand: "Merceder",
	model: "G class",
	parameters: {
		width: 1500,
		length: 4000
	}
};


const carJSON = JSON.stringify(carObject);
console.log(carJSON);