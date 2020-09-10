const commentAdapter = new CommentAdapter
const subjectAdapter = new SubjectAdapter
let currentSubject = null
const errorMessage = document.querySelector('#error-message')

//const currentSubject = new Subject
//const commentList = document.querySelector("#comment-list")

//const commentClass = new CommentClass

//console.log("this is logged")
//test that we can get data from the backend


//////////
    // global variable called current subject in index = nothing
////////////

const BASE_URL = "http://localhost:3000"
const COMMENTS_URL = `${BASE_URL}/comments`
const SUBJECT_URL = `${BASE_URL}/subjects`
  
document.addEventListener("DOMContentLoaded", () => {

form = document.querySelector('.comment-area')
form.addEventListener("submit", commentAdapter.submitData)

subjectAdapter.fetchSubjects()
commentAdapter.fetchComments()

});
