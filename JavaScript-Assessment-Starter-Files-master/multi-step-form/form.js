$(document).ready(function() {
    // step 1 form
    var f_name = $('#first_name');
    if(f_name == ''){
        f_name.attr('required','required')
    } else {
        f_name = f_name.val();
    }
    
    var f_name_error = $('#first_name_error');
    var l_name = $('#last_name').val();
    var l_name_error = $('#last_name_error');
    var email = $('#email').val();
    var email_error = $('#email_error');

    function validateFirstName(f_name) {
        let f_name_pattern = /^[\S\D]?\w+/gi;
        let f_bool = f_name_pattern.test(f_name);
        console.log(f_bool);
    }
    function validateLastName(l_name) {
        let l_name_pattern = /^[\S\D]?\w+/gi;
        let l_bool = l_name_pattern.test(l_name);
        return l_bool;
    }
    function validateEmail(email){
        let email_pattern = /^[\S\D]\w+@\w+.\w+/;
        let e_bool = email_pattern.test(email);
        return e_bool;
    }
    console.log(validateEmail(email))
    $('#StepOneNext').click(function(e){
        e.preventDefault()
        if(!validateFirstName(f_name)){
            f_name_error.css('display','block');
        }
        if(!validateLastName(l_name)){
            l_name_error.css('display','block');
        }
        if(!validateEmail(email)){
            email_error.css('display','block');
        }
        
    });
    
        
    
    
 
})