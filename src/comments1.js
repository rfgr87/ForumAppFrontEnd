const htmlElement = document.querySelector('div#comments-list');

class Comment1Class{
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
        htmlElement.innerHTML += 
        `<div class="comment-${json.id}">
        <p>
        <span class="info">${json.info}</span>
        <button class="delete" data-id="${json.id}">Delete</button>
        <button class="update" data-id="${json.id}">Update</button>
        <p>
        </div>`
    }

    
    createComment(json) {
        for (const comment of json) {
        htmlElement.innerHTML += 
        `<div class="comment-${comment.id}">
        <p>
        <span class="info">${comment.info}</span>
        <button class="delete" data-id="${comment.id}">Delete</button>
        <button class="update" data-id="${comment.id}">Update</button>
        <p>
        </div>`
        }
    }

    
    // addItems(response){
    //     response.info.forEach( item => {
    //         addComment(item)
    // })
    // }

}