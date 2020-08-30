const comment1Class = new Comment1Class

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
        
        fetch("http://localhost:3000/comments.json", configObj)
        .then(response => response.json())
        .then(json => comment1Class.addComment(json))
        form.reset()
    }


    // fetchComments(){
    //     fetch('http://localhost:3000/comments')
    //     .then(response => response.json())
    //     .then(comment1Class.addItems)
    // }
    
    fetchComments() {
        fetch("http://localhost:3000/comments.json")
        .then(response => response.json())
        .then(json => comment1Class.createComment(json))
        
    }

    deleteMethod(e) {
        e.preventDefault()

        let formData = {
        
        "info": document.querySelector(`comment-${json.id}`).value,
        "subject_id": "1"
        }
        
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        };
        
        fetch("http://localhost:3000/comments", configObj)
        .then(response => response.json())
        .then(json => comment1Class.deleteComment(json))
    }
}