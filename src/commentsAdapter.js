class CommentsAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/comments"
    }

    // GET
    fetchComments(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.forEach((el)=>{
                this.sanitizeAndInitializeComment(el)
            })
        })
    }

    sanitizeAndInitializeComment(resp){
        let com = new Comment({id: resp.id, ...resp.attributes})
        com.attachToDom()
    }





}