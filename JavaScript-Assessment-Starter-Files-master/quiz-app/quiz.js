$(document).ready(function() {
    console.log('Loaded');

    createQuizOptions = (optionText,item_id,number)=>{
        const div = document.createElement('div');
        div.className = 'option-wrapper';

        const label = document.createElement('label');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.required = true;
        radio.name = `q${item_id}`;
        radio.value = number+1;

        const paragraph = document.createElement('p');
        paragraph.innerHTML = optionText;

        label.appendChild(radio);
        label.appendChild(paragraph);

        div.appendChild(label);
        return div;
    }

    createQuizItem = (item)=>{
        var section = document.createElement('section');
        section.className = 'quiz-item';
    
        var question = document.createElement('h3');
        question.innerHTML = `Q${item.id}. ${item.question}`;

        section.appendChild(question);

        item.options.map((el, index)=>{
            section.append(createQuizOptions(el, item.id, index));
        })

        return section;
    }
    
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data){
        data.map((element)=>{
            (createQuizItem(element));
        })
    });
});