    //const commentClass = new Comment1Class
    const commentHtmlElement = document.querySelector('div#comments-list')
    //const commentDelete = document.querySelector('div#comment-${this.id}');
    const subjectHtmlElement = document.querySelector('div#subject-list')
    const buttonHtmlElement = document.querySelector('#button')
    const nodeArray = document.querySelector('div#comments-list').childNodes
    //const comment1 = new Comment1Class
    //const currentSubject = new Subject

    class Subject{
        static all = []

        /// This does not work if uncommented

        constructor({id, theme}){
            this.id = id
            this.theme = theme
            this.flag = ""
            this.element = document.createElement('div')
            this.element.id = `subject-${id}`
            Subject.all.push(this)
        }

        addSubjects(){
            this.render()
            subjectHtmlElement.append(this.element)
            this.chooseSubject()
        }

        render() {
            this.element.innerHTML += 
            `<p>
            <span class="theme">${this.theme}</span>
            <p>`
        }



        chooseSubject(){
            //let subject = document.querySelector(`#subject-${this.id}`)
            
            this.element.addEventListener('click', this.subjectEvent)
        }
        
    // when submit a form this subject will be the subject

        subjectEvent = () => {
            // let array = document.querySelector('div#comments-list').childNodes
            // array = ""
            commentHtmlElement.innerHTML = ""
            currentSubject = this
            errorMessage.innerHTML = ""
            Comment1Class.all.forEach(
                function(comment){
                if(comment.subject_id == currentSubject.id){
                        comment.addComment()
                        comment.addEventListeners() 

                    }
                }
            )
            comment1Class.addEventSort()   
        } 
    }
            //Aqui poner el html que se necesita para poner todos los comments
            // this needs to be an arrow function
            // write another fucntion in this class called comment that is going 
            //to look through all the comments
            //and filter out the ones that belongs to this subject

            // dont added after you fetch the comment only add the comment wehn they click on the subject
            //

           // comments(subject_id){
                


