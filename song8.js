document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const audioSource = document.getElementById("audioSource");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const seekBar = document.getElementById("seekBar");
    const cover = document.getElementById("cover");
    

  
    const songs = [
        {
            title: "Song 8",
            artist: "Maan Meri Jaan - King",
            cover: "8.jpg",
            file: "song8.mp3"
            
          }
          
      ];
    
    




      
     let currentSongIndex = 0;

  function loadSong() {
    const currentSong = songs[currentSongIndex];
    audioSource.src = currentSong.file;
    cover.src = currentSong.cover;
    artist.textContent = currentSong.artist;
    
    audio.load();
  }






 






  
    loadSong();
  
    playPauseBtn.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
      } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
      }
    });
  
    nextBtn.addEventListener("click", function() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong();
      audio.play();
    });
  
    prevBtn.addEventListener("click", function() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong();
      audio.play();
    });
  
    audio.addEventListener("timeupdate", function() {
      const seekBarValue = (audio.currentTime / audio.duration) * 100;
      seekBar.value = seekBarValue;
    });
  
    seekBar.addEventListener("input", function() {
      const seekTime = (seekBar.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    });
  });



  