//const comment1Class = new Comment1Class
const commentList = document.querySelector("#comment-list")
//const subjectClass = new Subject

// The Delete action does not work.

class CommentAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/comments"
    }

    
    submitData(e) {
        e.preventDefault()
          //debugger-devtools open, submit chequ the value of textarea
        
        if(currentSubject == null){
            errorMessage.innerHTML = 'Choose a subject to submit'
        }
        else {
        let formData = {
        
        "info": document.querySelector('textarea').value,
        "subject_id": currentSubject.id
        // currentSubject.id
        // have a default subject
        // only when I click the subject I unhide the form... attribute called hidden 
        // and can be changed to true or false
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
        .then(json => {
            let comment = new Comment1Class(json)
            comment.addComment()
            comment.addEventListeners()    
        })
        form.reset()
    }}

    fetchComments() {
        fetch("http://localhost:3000/comments")
        .then(response => response.json())
        .then(jsonArray => {
            for (const element of jsonArray) {
                let comment = new Comment1Class(element)
                //  comment.addComment()
                //  comment.addEventListeners()
                //subjectClass.addSubjects()
            }
        }
    )            
}
    
    deleteMethod(id) {
        
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            //body: JSON.stringify(formData)
        };
        fetch(`http://localhost:3000/comments/${id}`, configObj)
        .then(response => response.json())
        //.then(json => this.deleteComment())
}


//     fetchSubjects() {
//         fetch("http://localhost:3000/subjects.json")
//         .then(response => response.json())
//         .then(jsonArray => {
//             for (const n of jsonArray) {
//                 let subject = new Subject(n)
//                 subject.addSubjects()
//                 subject.addEventListeners()
//             }
        
//         }
//     ) 
// }

}



