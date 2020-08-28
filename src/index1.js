console.log("this is logged")
//test that we can get data from the backend
const BASE_URL = "http://localhost:3000"
const COMMENTS_URL = `${BASE_URL}/comments`
const SUBJECT_URL = `${BASE_URL}/subjects`
  
document.addEventListener("DOMContentLoaded", () => {

form = document.querySelector('.comment-area')
form.addEventListener("submit", submitData)
//form.addEventListener('submit', submitData)

// Aqui voy a poner todo lo necesario para llenar el DOM
fetchComments()

});

function submitData(e) {
e.preventDefault()
  //debugger-devtools open, submit chequ the value of textarea
let formData = {

"info": document.querySelector('textarea').value,
"subject_id": "1"
}

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}; 

fetch("http://localhost:3000/comments", configObj)
.then(response => response.json())
.then(json => addComment(json)) //function to append the comment to append to the list
form.reset()


}// callback function and define it elsewere

// GET fetch all toy objects.
function fetchComments() {
fetch("http://localhost:3000/comments")
.then(response => response.json())
.then(json => createComment(json))
}

  // p tag with total likes
function writeComments(comment, newDiv) {
    let commentChild = document.createElement('p')
    commentChild.innerHTML = `<span>${comment} </span>`
    newDiv.appendChild(commentChild)
}

function createComment(json) {
  let htmlElement = document.querySelector('div#comments-list');
    // for each toy   
  for (const comment of json) {
    let comment1 = comment.info
    let newDiv = document.createElement('div')  
    newDiv.className = `comment-${comment.id}`
    htmlElement.append(newDiv)
    writeComments(comment1, newDiv)
}
}

function addComment(json) {
    let htmlElement = document.querySelector('div#comments-list');
    let comment = json.info
    let newDiv = document.createElement('div');
    newDiv.className = `comment-${json.id}`
    htmlElement.append(newDiv)
    writeComments(comment, newDiv)
}

