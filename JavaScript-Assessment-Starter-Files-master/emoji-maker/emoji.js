$(document).ready(function() {
    var yellow_skin = $('#yellow-skin');
    var green_skin = $('#green-skin');
    var red_skin = $('#red-skin');
    
    yellow_skin.click(callYellowSkin);
    green_skin.click(callGreenSkin);
    red_skin.click(callRedSkin);

    selectEyes();
    selectMouth();

    previousSkinStep();
    previousEyeStep();
});

function callYellowSkin() {
    var skin_img = $('#skin');
    changeSkin();
    skin_img.attr('src','./assets/skin/yellow.png');
}

function callGreenSkin() {    
    var skin_img = $('#skin');
    changeSkin();
    skin_img.attr('src','./assets/skin/green.png');
}

function callRedSkin() {
    var skin_img = $('#skin');
    changeSkin();
    skin_img.attr('src','./assets/skin/red.png');
}

function changeSkin(){
    var skin_card = $('#select-skin-card');
    var eyes_card = $('#select-eyes-card');
    eyes_card.css('display','block');
    skin_card.css('display','none');
}

function selectEyes() {
    var eyes_card = $('#select-eyes-card');
    var mouth_card = $('#select-mouth-card');

    let normal = $('#eye-normal');
    let n_attr = normal.attr('src');
    let closed = $('#eye-closed');
    let c_attr = closed.attr('src');
    let long = $('#eye-long');
    let l_attr = long.attr('src');
    let laughing = $('#eye-laughing');
    let laugh_attr = laughing.attr('src');
    let rolling = $('#eye-rolling');
    let r_attr = rolling.attr('src');
    let winking = $('#eye-winking');
    let w_attr = winking.attr('src');

    normal.click(()=>{        
        let eye_img = $('#eyes');
        eye_img.attr('src',n_attr);
        eyes_card.css('display','none');
        mouth_card.css('display', 'block');
    });
    winking.click(()=>{        
        let eye_img = $('#eyes');
        eye_img.attr('src',w_attr);
        eyes_card.css('display','none');
        mouth_card.css('display', 'block');
    });
    rolling.click(()=>{        
        let eye_img = $('#eyes');
        eye_img.attr('src',r_attr);
        eyes_card.css('display','none');
        mouth_card.css('display', 'block');
    });
    laughing.click(()=>{        
        let eye_img = $('#eyes');
        eye_img.attr('src',laugh_attr);
        eyes_card.css('display','none');
        mouth_card.css('display', 'block');
    });
    long.click(()=>{        
        let eye_img = $('#eyes');
        eye_img.attr('src',l_attr);
        eyes_card.css('display','none');
        mouth_card.css('display', 'block');
    });
    closed.click(()=>{        
        let eye_img = $('#eyes');
        eye_img.attr('src',c_attr);
        eyes_card.css('display','none');
        mouth_card.css('display', 'block');
    });    
}
function selectMouth() {
    let mouth_card = $('#select-mouth-card');
    let open = $('#mouth-open');
    let smile = $('#mouth-smiling');
    let straight = $('#mouth-straight');
    let sad = $('#mouth-sad');
    let teeth = $('#mouth-teeth');

    let o_attr = open.attr('src');
    let sm_attr = smile.attr('src');
    let st_attr = straight.attr('src');
    let sad_attr = sad.attr('src');
    let t_attr = teeth.attr('src');

    open.click(()=>{
        let mouth_img = $('#mouth');
        mouth_img.attr('src',o_attr);
    });
    smile.click(()=>{
        let mouth_img = $('#mouth');
        mouth_img.attr('src',sm_attr);
    });
    straight.click(()=>{
        let mouth_img = $('#mouth');
        mouth_img.attr('src',st_attr);
    });
    sad.click(()=>{
        let mouth_img = $('#mouth');
        mouth_img.attr('src',sad_attr);
    });
    teeth.click(()=>{
        let mouth_img = $('#mouth');
        mouth_img.attr('src',t_attr);
    });
}

function previousSkinStep(e){
    var prevStep = $('.previous-step');
    prevStep.click(()=>{
        let skin = $('#select-skin-card');
        let eyes = $('#select-eyes-card')
        eyes.css('display','none');
        skin.css('display','block');
    })
}


function previousEyeStep(){
    var prevStep = $('.show-eyes-card');
    prevStep.click(()=>{
        let mouth = $('#select-mouth-card');
        let eyes = $('#select-eyes-card')
        let skin = $('#select-skin-card');        
        mouth.css('display','none');
        skin.css('display','none');
        eyes.css('display','block');
    })
}