console.log("Welcome to Spotify");
let audioElement = new Audio("songs/SiyaRamSong.mp3");
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
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/SiyaRam.jpg",
    },
    {
        songName:"Apna Bana Le",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/bhediya.jpg",
    },
    {
        songName:"Bhool Bhulaiyaa",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/bhoolBhulaiyaa.jpg",
    },
    {
        songName:"Ho gaya hai tujhe pyaar",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/ddlj.jpg",
    },
    {
        songName:"Dholna",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/dilToPagal.jpg",
    },
    {
        songName:"Yeh Ladka hai Deewana",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/KuchKuchHotaHai.jpg",
    },
    {
        songName:"Aankhen khuli",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/mohabbatein.jpg",
    },
    {
        songName:"Pathan",
        filePath:"songs/SiyaRamSong.mp3",
        coverpath:"covers/pathaan.jpg",
    },
]

songItems.forEach((element, i)=>{
    console.log("songs");
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        console.log(audioElement.paused)
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
    }
    else{
        audioElement.pause();
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

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        // audioElement.src = `songs/${songIndex}.mp3`;
        currentSong.innerHTML = songs[songIndex].songName;
        
        // audioElement.currentTime = 0;
        // audioElement.play();
        gif1.style.opacity = 1;
        gif2.style.opacity = 1;
        // audioElement.classList.remove('fa-play');
        // audioElement.classList.add('fa-pause');
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
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.src = `songs/${songIndex}.mp3`;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play');
//         masterPlay.classList.add('fa-pause');
//         gif1.style.opacity = 1;
//         gif2.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause');
//         masterPlay.classList.add('fa-play');
//         gif1.style.opacity = 0;
//         gif2.style.opacity = 0;
//     }
// })



