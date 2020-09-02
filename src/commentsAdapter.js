//const comment1Class = new Comment1Class
const commentList = document.querySelector("#comment-list")


// The Delete action does not work.

class CommentAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/comments"
    }

    
    submitData(e) {
        e.preventDefault()
          //debugger-devtools open, submit chequ the value of textarea
        let formData = {
        
        "info": document.querySelector('textarea').value,
        "subject_id": "1" //document.querySelector(`#subject-${this.id}`)
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
    }

    fetchComments() {
        fetch("http://localhost:3000/comments.json")
        .then(response => response.json())
        .then(jsonArray => {
            for (const element of jsonArray) {
                let comment = new Comment1Class(element)
                comment.addComment()
                comment.addEventListeners()
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
        // .then(json => this.deleteComment())
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



