//const commentAdapter = new CommentAdapter

const htmlElement = document.querySelector('div#comments-list');
//let html = document.querySelector('div#comments-list').childNodes
let array = []


class Comment1Class{
    static all = []

    /// This does not work if uncommented

    constructor({id, info, subject_id}){
        this.id = id
        this.info = info
        this.subject_id = subject_id
        this.element = document.createElement('div')
        this.element.id = `comment-${this.id}`
        Comment1Class.all.push(this)
    }

    addComment(){
        this.render()
        htmlElement.append(this.element)
    }

    render(){
        this.element.innerHTML = 
        `<p>
        <span class="info">${this.info}</span>
        <button class="delete" id="delete-${this.id}">Delete</button>
        <p>`
    }

    addEventListeners(){
        let deleteButton = document.querySelector(`#delete-${this.id}`)
        //debugger
        deleteButton.addEventListener('click', this.deleteComment)    
    }

    deleteComment(event){
        console.log('delete')
        let id = event.target.id.split('-')[1]
        event.target.parentNode.parentNode.remove()
        commentAdapter.deleteMethod(id)
    }
}
