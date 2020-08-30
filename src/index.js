const commentAdapter = new CommentAdapter
//const commentList = document.querySelector("#comment-list")

//const commentClass = new CommentClass

//console.log("this is logged")
//test that we can get data from the backend
const BASE_URL = "http://localhost:3000"
const COMMENTS_URL = `${BASE_URL}/comments`
const SUBJECT_URL = `${BASE_URL}/subjects`
  
document.addEventListener("DOMContentLoaded", () => {

form = document.querySelector('.comment-area')
form.addEventListener("submit", commentAdapter.submitData)
form.addEventListener("click", commentAdapter.deleteMethod)
//form.addEventListener('submit', submitData)
commentAdapter.fetchComments()
// Aqui voy a poner todo lo necesario para llenar el DOM

});
