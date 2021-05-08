// select elements

const coverImg = document.querySelector('#cover')
const songTitle = document.querySelector('.song-title')
const progressBar = document.querySelector('#progress')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// GLOBALS

let currentSong = 1

let songs = ['A Head Full of Dreams',
'Coldplay - A Sky Full Of Stars'
]


//  functions 

// load song
const loadSong = () =>{
  console.log("clicked")

}
// play previous song
const playPrevSong = () =>{
  console.log("clicked")
}

// play next song
const playNextSong = () =>{
  console.log("clicked")
}

// events 

prevBtn.addEventListener('click', playPrevSong)
playBtn.addEventListener('click', loadSong)
nextBtn.addEventListener('click', playNextSong)
