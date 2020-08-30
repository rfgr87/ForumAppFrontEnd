class CommentClass{
    static all = []

    /// Que funcione el constructor

    // constructor({id, info}){
    //     this.id = id
    //     this.info = info
    //     Comment.all.push(this)
    // }

    removeElement(json) {
        // Removes an element from the document.
        var element = document.getElementById(json);
        element.parentNode.removeChild(json);
    }

    addComment(json) {
        let htmlElement = document.querySelector('div#comments-list');
        let comment = json.info
        let newDiv = document.createElement('div');
        newDiv.className = `comment-${json.id}`
        htmlElement.append(newDiv)
        this.writeComments(comment, newDiv)
    }
    
    createComment(json) {
        let htmlElement = document.querySelector('div#comments-list');
          // for each toy   
        for (const comment of json) {
          let comment1 = comment.info
          let newDiv = document.createElement('div')  
          newDiv.className = `comment-${comment.id}`
          htmlElement.append(newDiv)
          this.writeComments(comment1, newDiv)
        }
    }

    writeComments(comment, newDiv) {
        let commentChild = document.createElement('p')
        commentChild.innerHTML = `<span>${comment} </span>`
        newDiv.appendChild(commentChild)
    }
}