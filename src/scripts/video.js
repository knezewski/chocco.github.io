;(function () {

    
let video;
let durationControl; 
let soundControl;
let intervalId;
var soundLevel;


$().ready(function(){
    video = document.getElementById("player"); 
    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length; i++){
        playButtons[i].addEventListener('click', playStop);
    }
    durationControl = document.getElementById("levelVideo");  
    durationControl.addEventListener('mousedown', stopInterval);   
    durationControl.addEventListener('mouseup', setVideoDuration); 
    durationControl.min = 0;
    durationControl.value = 0;    

    soundControl = document.getElementById("levelSound");    
    soundControl.addEventListener('mouseup', changeSoundVolume); 
    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;

     
    let micControl = document.getElementById("mic");
     micControl.addEventListener('click', function(){
      if (video.volume === 0){
          video.volume = soundLevel;
          soundControl.value = soundLevel*10;
          $('.sound_pic').removeClass('sound__pic_active')
      } else{
          soundLevel = video.volume;
          video.volume = 0;
          soundControl.value = 0;
          $('.sound_pic').addClass('sound__pic_active')
      } 
      })

    video.addEventListener('ended', function () {
        $(".play_btn").removeClass("video__player-img--active");
        $(".duration__play").removeClass("duration__img-active"); 
        video.currentTime = 0;
    }, false);
});

function playStop(){
    durationControl.max = video.duration;
    if (video.paused){
        video.play();
        intervalId = setInterval(updateDuration, 1000/66)
        $(".play_btn").addClass("video__player-img--active");
        $(".duration__play").addClass("duration__img-active");
    } else{
        video.pause();  
        clearInterval(intervalId);
        $(".play_btn").removeClass("video__player-img--active");
        $(".duration__play").removeClass("duration__img-active"); 
    }
}
function stopInterval(){
    video.pause();
    clearInterval(intervalId);
}
function setVideoDuration(){
    if (video.paused){
        video.play();
        $(".play_btn").addClass("video__player-img--active");
        $(".duration__play").addClass("duration__img-active");
    } else{
        video.pause();
        $(".play_btn").removeClass("video__player-img--active");
        $(".duration__play").removeClass("duration__img-active");    
    }
    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration,1000/66);
}

function updateDuration(){    
    durationControl.value = video.currentTime;
}
function changeSoundVolume(){
  video.volume = soundControl.value/10; 
}
})()