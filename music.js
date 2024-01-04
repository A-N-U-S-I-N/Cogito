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
            title: "Song 1",
            artist: "Dilawara - The ProPhec",
            cover: "1.jpg",
            file: "song1.mp3"
            
          },
          {
            title: "Song 2",
            artist: "Farq Hai - Sozonn",
            cover: "2.jpg",
            file: "song2.mp3"
          },
          {
            title: "Song 3",
            artist: "Kitaab - Gravero",
            cover: "3.jpg",
            file: "song3.mp3"
          },
          {
            title: "Song 4",
            artist: "Kina Chir - The ProPhec",
            cover: "4.jpg",
            file: "song4.mp3"
          },
          {
            title: "Song 5",
            artist: "Crown - King ",
            cover: "5.jpg",
            file: "song5.mp3"
          },
          {
            title: "Song 6",
            artist: "GhumShuda - King",
            cover: "6.jpg",
            file: "song6.mp3"
          },
          {
            title: "Song 7",
            artist: "Oops - King",
            cover: "7.jpg",
            file: "song7.mp3"
          },
          {
            title: "Song 8",
            artist: "Meri Jaan - King ",
            cover: "8.jpg",
            file: "song8.mp3"
          },
          {
            title: "Song 9",
            artist: "Minna Minna - Garry Sandhu",
            cover: "9.jpg",
            file: "song9.mp3"
          },
          {
            title: "Song 10",
            artist: "Mushkurahat - Mitraz",
            cover: "10.jpg",
            file: "song10.mp3"
          },
          {
            title: "Song 11",
            artist: "Tum Prem - Aishwarya",
            cover: "11.jpg",
            file: "song11.mp3"
          },
          {
            title: "Song 12",
            artist: "Tu Aake Dekhle - King",
            cover: "12.jpg",
            file: "song12.mp3"
          },
          {
            title: "Song 13",
            artist: "Weapon- Garry Sandhu",
            cover: "13.jpg",
            file: "song13.mp3"
          },
          {
            title: "Song 14",
            artist: "Your Eyes - Bin Sakoi",
            cover: "14.jpg",
            file: "song14.mp3"
          },
          {
            title: "Song 15",
            artist: "Akhiyan - Mitraz",
            cover: "15.jpg",
            file: "song15.mp3"
          }
        // Add more songs as needed
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



  
