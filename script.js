console.log("Welcome to Spotify");
let audioElement = new Audio("songs/0.mp3");
// audioElement.play();

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let currentSong = document.getElementById('currentSong');
let gif1 = document.getElementById('gif1');
let gif2 = document.getElementById('gif2');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName:"SiyaRam",
        filePath:"songs/0.mp3",
        coverpath:"covers/0.jpg",
    },
    {
        songName:"Apna Bana Le",
        filePath:"songs/1.mp3",
        coverpath:"covers/1.jpg",
    },
    {
        songName:"Bhool Bhulaiyaa",
        filePath:"songs/2.mp3",
        coverpath:"covers/2.jpg",
    },
    {
        songName:"Ho gaya hai tujhe pyaar",
        filePath:"songs/3.mp3",
        coverpath:"covers/3.jpg",
    },
    {
        songName:"Dholna",
        filePath:"songs/4.mp3",
        coverpath:"covers/4.jpg",
    },
    {
        songName:"Yeh Ladka hai Deewana",
        filePath:"songs/5.mp3",
        coverpath:"covers/5.jpg",
    },
    {
        songName:"Aankhen khuli",
        filePath:"songs/6.mp3",
        coverpath:"covers/6.jpg",
    },
    {
        songName:"Pathan",
        filePath:"songs/7.mp3",
        coverpath:"covers/7.jpg",
    },
]
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}
songItems.forEach((element, i)=>{
    console.log("songs");
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterPlay.addEventListener('click', ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        // console.log(audioElement.paused)
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
    }
    else{
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif1.style.opacity = 0;
        gif2.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
});
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
});


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        songIndex = parseInt(e.target.id);
        makeAllPlays();

        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        currentSong.innerHTML = songs[songIndex].songName;
        gif1.src = songs[songIndex].coverpath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
        audioElement.classList.remove('fa-play');
        audioElement.classList.add('fa-pause');
        masterPlay.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
    })
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    currentSong.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif1.style.opacity = 1;
    gif2.style.opacity = 1;
    audioElement.classList.remove('fa-play');
    audioElement.classList.add('fa-pause');
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    currentSong.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif1.style.opacity = 1;
    gif2.style.opacity = 1;
    audioElement.classList.remove('fa-play');
    audioElement.classList.add('fa-pause');
})




