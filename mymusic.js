const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');



const songs = [
    'bepanah',
    'bawal',
    'befikra',
    'bekhayali',
];

let songIndex=2;



function loadSong(song) {
  title.innerText = song;
  audio.src = `${song}.mp3`;
  cover.src = `${song}.jpg`;
}

loadSong(songs[songIndex]);


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });



  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
  }

  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }

  prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  progressContainer.addEventListener('click', setProgress);

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }

  audio.addEventListener('ended', nextSong);

  //---------------now i go to create a list mo my musics

  function gotopage(pagename){
    if(pagename=='list'){
        window.location.href=pagename+'.html';
        return;
    }else{
        window.location.href='mymusic.html';
        return;
    }
  }


 var music = document.getElementById('music');
  var icon = document.getElementById('icon');
  icon.onclick = function (){
      if(music.paused) {
          icon.src = "befikra.jpg";
          music.play();
      } else {
          icon.src = "bepanah.jpg";
          music.pause();
      }
    }

