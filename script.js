const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");


let playing=false;
let songIndex=1;

const playMusic=()=>{
    playing=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};

const pauseMusic=()=>  {
    playing=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

const songs=[
    {
        name:"1",
        title:"Let me love you",
        artist:"Justin Bieber"
    },
    {
        name:"2",
        title:"Mann mera",
        artist:"Gajendra Verma"
    },
    {
        name:"3",
        title:"Despacito",
        artist:"Justin Bieber"
    }
];



play.addEventListener("click",()=>{
    if (playing){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

// adding song data
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=songs.name+".mp3"
    img.src=songs.name+".jpg"
};


loadSong(songs[1]);

const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
