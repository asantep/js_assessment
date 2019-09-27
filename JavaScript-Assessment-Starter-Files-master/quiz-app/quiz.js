$(document).ready(function() {
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
    const btnSection = $('#submit-section');
    $('.quiz').html('');
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data){
        localStorage.setItem('quiz-data',JSON.stringify(data));
        data.map((element)=>{
            $('.quiz').append(createQuizItem(element));
        })

        $('.quiz').append(btnSection)
    });

    $('#modal-wrapper').click(()=>{
        $('#modal-wrapper').css('display','none');
    })

    $('.quiz').submit(function (e) {
        e.preventDefault();
        const options = $('input[type=radio]:checked');
        options.each(function(){
            const scoreObj = {};
            const name = $(this).attr('name');
            const value = $(this).attr('value');

            scoreObj[`${name}`] = value;
            let quizData = localStorage.getItem('quiz-data');
            quizData = JSON.parse(quizData);

            const finalScore = quizData.reduce((acc,item)=>{
                if (item.answer === parseInt(scoreObj[`q${item.id}`])) {
                    acc += 1;
                }
                return acc;
            },0);
            $('#result').html(finalScore + '/' + quizData.length);
            $('#modal-wrapper').css('display','block');
        });
    })
});