// select elements
const coverImg = document.querySelector("#cover");
const musicImgBox = document.querySelector(".music-player-container");
const songTitle = document.querySelector(".song-title");
// progress bar elems
const progressBox = document.querySelector(".progress-box");
const progressBar = document.querySelector("#progress");
// buttons elems
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");

// GLOBALS

let currentSong = 1;

let songs = [
  "Alan Walker - Fade",
  "Coldplay - A Sky Full Of Stars",
  "Coldplay - Hymn For The Weekend",
  "Maroon 5 SZA - What Lovers Do"
];

//  functions

// load song
const loadSongs = (song) => {
  audio.src = `./music/${song}.mp3`;
  songTitle.innerText = song;
  coverImg.src = `./images/${song}.jpg`;
};

// Play song
const playCurrentSong = () => {
  musicImgBox.classList.add("play");
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");

  audio.play();
};

// pause song
const pauseSong = () => {
  musicImgBox.classList.remove("play");
  playBtn.classList.add("fa-play");
  playBtn.classList.remove("fa-pause");

  audio.pause();
};

// Previous song
const playPrevSong = () => {
  currentSong -= 1;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSongs(songs[currentSong]);

  playCurrentSong();
};

// Next song
const playNextSong = () => {
  currentSong += 1;

  if (currentSong > songs.length - 1) {
    currentSong = 0;
  }

  loadSongs(songs[currentSong]);

  playCurrentSong();
};

// Update progress bar
// const updateSongTime = (e) => {
//   const { songDuration, currentTime } = e.srcElemnt;
//   const percent = (currentTime / songDuration) * 100;
//   progressBar.style.width = `${percent}%`;
//   console.log("Debugging");
// };

// const setProgressPercent = (e) => {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;

//   audio.currentTime = (clickX / width) * duration;
// };
// Update progress bar
const updateProgressBar = (e) => {
  const { duration, currentTime } = e.srcElement;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
};

// Set progress bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// invoke functions
loadSongs(songs[currentSong]);

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicImgBox.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playCurrentSong();
  }
});

prevBtn.addEventListener("click", playPrevSong);
nextBtn.addEventListener("click", playNextSong);

audio.addEventListener("timeupdate", updateProgressBar);

progressBox.addEventListener("click", setProgressBar);

audio.addEventListener("ended", playNextSong);
