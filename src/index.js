
console.log("this is logged")
//test that we can get data from the backend
const BACKEND_URL = 'localhost:3000';
fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));
