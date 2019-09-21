var video_player = document.getElementById('video-player');
var views_count = document.getElementById('views-count');
var video_title = document.getElementById('video-title');
var video_description = document.getElementById('video-description');
var video_card_title = document.getElementsByClassName('video-card-title');
var thumbnail = document.getElementsByClassName('thumbnail');

function getPlaylist(){
    var playlist_url = "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist"
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var responseText = JSON.parse(this.responseText);
                for (let i = 0; i < responseText.length; i++) {
                    const element = responseText[i];
                    
                    Array.prototype.forEach.call(thumbnail, function(value, index) {
                        if(i === index){
                            value.src = element.thumbnail;
                        } 
                    });
                    Array.prototype.forEach.call(video_card_title, function(value, index) {
                        if(i === index){
                            value.innerText = element.title;
                        } 
                    });
                }          
            } else {
                console.log("Call failed");
            }              
        } 
    };
    http.open('GET',playlist_url,true);
    http.send();
}

getPlaylist();

let card1 = document.getElementById('card1');
card1.addEventListener('click',function(){
    let c1 = 'card1'.slice(-1);   
    card1.classList.add('active-card');
    card2.classList.remove('active-card'); 
    card3.classList.remove('active-card');       
    card4.classList.remove('active-card');
    card5.classList.remove('active-card'); 
    card6.classList.remove('active-card');  
    getVideoFromPlaylist(c1); 
    document.documentElement.scrollTop = 0;        
})
let card2 = document.getElementById('card2');
card2.addEventListener('click',function(){
    let c1 = 'card2'.slice(-1);   
    card1.classList.remove('active-card');
    card2.classList.add('active-card'); 
    card3.classList.remove('active-card');       
    card4.classList.remove('active-card');
    card5.classList.remove('active-card'); 
    card6.classList.remove('active-card');     
    getVideoFromPlaylist(c1); 
    document.documentElement.scrollTop = 0;   
})
let card3 = document.getElementById('card3');
card3.addEventListener('click',function(){
    let c1 = 'card3'.slice(-1);      
    card1.classList.remove('active-card');
    card2.classList.remove('active-card'); 
    card3.classList.add('active-card');       
    card4.classList.remove('active-card');
    card5.classList.remove('active-card'); 
    card6.classList.remove('active-card');
    getVideoFromPlaylist(c1); 
    document.documentElement.scrollTop = 0;   
})
let card4 = document.getElementById('card4');
card4.addEventListener('click',function(){
    let c1 = 'card4'.slice(-1);        
    card1.classList.remove('active-card');
    card2.classList.remove('active-card'); 
    card3.classList.remove('active-card');       
    card4.classList.add('active-card');
    card5.classList.remove('active-card'); 
    card6.classList.remove('active-card');  
    getVideoFromPlaylist(c1);  
    document.documentElement.scrollTop = 0;  
})
let card5 = document.getElementById('card5');
card5.addEventListener('click',function(){
    let c1 = 'card5'.slice(-1);        
    card1.classList.remove('active-card');
    card2.classList.remove('active-card'); 
    card3.classList.remove('active-card');       
    card4.classList.remove('active-card');
    card5.classList.add('active-card'); 
    card6.classList.remove('active-card'); 
    getVideoFromPlaylist(c1);    
    document.documentElement.scrollTop = 0;
})
let card6 = document.getElementById('card6');
card6.addEventListener('click',function(){
    let c1 = 'card6'.slice(-1);       
    card1.classList.remove('active-card');
    card2.classList.remove('active-card'); 
    card3.classList.remove('active-card');       
    card4.classList.remove('active-card');
    card5.classList.remove('active-card'); 
    card6.classList.add('active-card');   
    getVideoFromPlaylist(c1);    
    document.documentElement.scrollTop = 0;
})

function getVideoFromPlaylist(id){
    var video_url = "http://5d76bf96515d1a0014085cf9.mockapi.io/video/"+id
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var responseText = JSON.parse(this.responseText);
                //console.log(responseText);
                views_count.innerText = responseText.views;
                video_title.innerText = responseText.title;
                video_description.innerText = responseText.description;
                video_player.src = "https://player.vimeo.com/video/"+ responseText.vimeoId;

            } else {
                console.log("Call failed")
            }
        }
    }
    http.open('GET',video_url,true);
    http.send();
}