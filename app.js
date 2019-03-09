const songs = [
  'bensound-creativeminds.mp3',
  'bensound-summer.mp3',
  'bensound-ukulele.mp3'
];

const createSongsList = () => {
  const list = document.createElement('ol');

  songs.forEach(song => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(song));
    list.appendChild(li);
  });

  return list;
};

document.getElementById('songList').appendChild(createSongsList());

songList.onclick = e => {
  const clickedItem = e.target.innerText;
  const source = document.getElementById('source');
  source.src = 'audio/' + clickedItem;

  player.load();
  player.play();
  //   console.log(clickedItem);

  const currentSong = document.querySelector('.current-song');
  currentSong.innerHTML = clickedItem;
};

const playAudio = () => {
  player.play();
};

const pauseAudio = () => {
  player.pause();
};

// for volume controls

const slider = document.getElementById('volumeSlider');
slider.oninput = e => {
  const volume = e.target.value;
  player.volume = volume;
  //   console.log(e.target.value);
};

const updateProgress = () => {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById('progress');

    progressBar.value = (player.currentTime / player.duration) * 100;

    // console.log(progressBar.value);
  }
};
