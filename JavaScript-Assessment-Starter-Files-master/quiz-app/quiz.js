$(document).ready(function() {
    var response = null
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data,status){
        response = data;
        console.log(response); 
        response.map((value,key)=>{        
            console.log(createQuestionNode(value,key))
              
        })
    })
});


var question = $('.question');
function createQuestionNode(item,key) {
    for (let i = 0; i < question.length; i++) {
        const element = question[i]
        if(parseInt(key)==element){
            question.text(item.question);
            console.log(question);
            
        }        
    }
} 
