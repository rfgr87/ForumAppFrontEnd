const comment1Class = new Comment1Class
const commentList = document.querySelector("#comment-list")
const jsonid = 18

// The Delete action does not work.

class CommentAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/comments"
    }

    // Comment adapter is for fetching
    // Comments Class is for the functionality and displaying the comment on the DOM
    // Comments should have render to call comment.render
    // Comment.attach_to_dom
    submitData(e) {
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
        .then(json => comment1Class.addComment(json))
        form.reset()
    }

    fetchComments() {
        fetch("http://localhost:3000/comments.json")
        .then(response => response.json())
        .then(json => comment1Class.createComment(json))        
    }
}

//Esto esta jodiendo el add comment
//     deleteMethod(e) {
//         e.preventDefault()
//         if(e.target.className === "delete"){
//            jsonid = e.target.dataset.id}

//         // let formData = {
        
//         //     "delete": document.querySelector(`comment-${id}`).value,
//         //     "subject_id": "1"
//         //     }
        
//         let configObj = {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             //body: JSON.stringify(formData)
//         };
//         fetch(`http://localhost:3000/comments/${jsonid}`, configObj)
//         .then(response => response.json())
//         .then(json => comment1Class.deleteComment(json))
//     }
// }



