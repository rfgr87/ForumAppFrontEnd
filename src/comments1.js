const htmlElement = document.querySelector('div#comments-list');

class Comment1Class{
    static all = []

    /// This does not work if uncommented

    // constructor({id, info}){
    //     this.id = id
    //     this.info = info
    //     Comment.all.push(this)
    // }

    // removeElement(json) {
    //     // Removes an element from the document.
    //     var element = document.getElementById(json);
    //     element.parentNode.removeChild(json);
    // }

    addComment(json) {
        htmlElement.innerHTML += 
        `<div class="comment-${json.id}">
        <p>
        <span class="info">${json.info}</span>
        <button class="delete" id="${json.id}">Delete</button>
        <button class="update" id="${json.id}">Update</button>
        <p>
        </div>`
    }

    
    createComment(json) {
        for (const comment of json) {
        htmlElement.innerHTML += 
        `<div class="comment-${comment.id}">
        <p>
        <span class="info">${comment.info}</span>
        <button class="delete" id="${comment.id}">Delete</button>
        <button class="update" id="${comment.id}">Update</button>
        <p>
        </div>`
        }
    }

    deleteComment(json){
        var element = document.getElementById(json);
        element.parentNode.removeChild(json);
        
        //id = object.id
        // remove from dom
        // optimistic rendering
        // Aqui hay que trabajar con como sacar la informacion y 
        //targuetiar el comment especifico.
        //let comment = htmlElement.getElementBy(`comment-${id}`)
        //let comment = document.getElementById(`comment-${id}`)
        //element.remove()
    }
}