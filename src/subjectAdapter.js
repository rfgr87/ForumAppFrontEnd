//const comment1Class = new Comment1Class
//const commentList = document.querySelector("#comment-list")


// The Delete action does not work.

class SubjectAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/subjects"
    }

 
    fetchSubjects() {
        fetch("http://localhost:3000/subjects.json")
        .then(response => response.json())
        .then(jsonArray => {
            for (const n of jsonArray) {
                let subject = new Subject(n)
                subject.addSubjects()
                //subject.buttonEventSubjects()
            }
        }
    )
}

}



