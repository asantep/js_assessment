$(document).ready(function() {
    // step 1 form

    let f_name = $('#first_name');
    let email = $('#email');
    let contact = $('#contact');
    let country = $('#country');
    let select = $('#select_program option:selected');
    
    let message = $('#message');
    let valid = false;

    $('#StepOneNext').click(function(e){
        e.preventDefault();
        let namePattern = /^[\S\D\w]*[\S\w]?$/gi;
        valid = namePattern.test(f_name.val());
        
        valid = false;
        let emailPattern = /^[\S\w][\w?]{0,}.[\w]{0,}.[\S\w]{0,3}$/gi;    
        valid = emailPattern.test(email.val());
        
        if (valid) {
            $('#StepOneContainer').css('display','none');
            $('#StepTwoContainer').css('display','block');
        } else{
            $('.ErrorText').css('display','block');
        }               
    });
    $('#StepTwoPrevious').click(function (e) {
        e.preventDefault();
        $('#StepOneContainer').css('display','block');
        $('#StepTwoContainer').css('display','none');
    })
    $('#StepTwoNext').click(function (e) {
        e.preventDefault();
        let countryPattern = /^[\S\D\w]*[\S\w]?$/gi;
        let numberPattern =  /^[\S+]{0}[\d?]{0,}[\S\d]{0,15}$/gi;

        valid = false;
        valid = numberPattern.test(contact.val());       

        valid = false;
        valid = countryPattern.test(country.val());
        
        if (valid) {
            $('#StepTwoContainer').css('display','none');
            $('#StepThreeContainer').css('display','block');
        } else {
            $('.ErrorText').css('display','block');
        }
        $('#StepThreePrevious').click(function (e) {
            e.preventDefault();
            $('#StepTwoContainer').css('display','block');
            $('#StepThreeContainer').css('display','none');            
        })
        $('#StepThreeSubmit').click(function (e) {
            e.preventDefault();

            let msgPattern = /^[\w]{0,51}$/gi;
            let selectPattern = /^[\w]*$/gi;

            valid = false;
            valid = msgPattern.test(message.val());

            valid = false;
            valid = selectPattern.test(select.val());
           
            if (valid) {
                $('#SuccessContainer').css('display','block');
                $('#StepThreeContainer').css('display','none');  
            } else {
                $('.ErrorText').css('display','block');
            }
            
        })
    })
})