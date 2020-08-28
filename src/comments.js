class CommentClass{
    static all = []

    constructor({id, info}){
        this.id = id
        this.info = info
        Comment.all.push(this)
    }

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
        .then(json => addComment(json))
        form.reset()   
        }

    fetchComments() {
        fetch("http://localhost:3000/comments")
        .then(response => response.json())
        .then(json => createComment(json))
    }

    addComment(json) {
        let htmlElement = document.querySelector('div#comments-list');
        let comment = json.info
        let newDiv = document.createElement('div');
        newDiv.className = `comment-${json.id}`
        htmlElement.append(newDiv)
        writeComments(comment, newDiv)
    }
    
    createComment(json) {
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

    writeComments(comment, newDiv) {
        let commentChild = document.createElement('p')
        commentChild.innerHTML = `<span>${comment} </span>`
        newDiv.appendChild(commentChild)
    }



}