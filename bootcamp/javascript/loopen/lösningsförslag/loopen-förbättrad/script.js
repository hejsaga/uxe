/* Loopen, EFTER omskrivningen med loop.

   Samma sida, samma beteende. Allt som upprepades per låt sköts nu
   av forEach. Lägg till en femte låt i HTML så fungerar den direkt.

   Ändrat:  hämtningen av låtarna, stopAllTracks och kopplingen
            av knapparna. Dessutom tydligare namn på variabler
            och funktioner.
   Orört:   logiken i updateStatusText, togglePlayback och
            toggleTrackLike. */

// Alla låtar på en gång. Knapparna letar vi upp inuti varje låt.
const tracks = document.querySelectorAll(".track");

const nowPlayingText = document.querySelector("#now-playing");
const likedCountText = document.querySelector("#liked-count");

let nowPlayingTitle = "";
let likedCount = 0;

// Skriver ut vilken låt som spelas och hur många som är gillade
function updateStatusText() {
  if (nowPlayingTitle === "") {
    nowPlayingText.textContent = "Ingenting spelas just nu";
  } else {
    nowPlayingText.textContent = "Spelar nu: " + nowPlayingTitle;
  }
  likedCountText.textContent = likedCount;
}

// Stoppa alla låtar. Tolv rader blev fem.
function stopAllTracks() {
  tracks.forEach(function (track) {
    const playButton = track.querySelector(".play-button");

    track.classList.remove("playing");
    playButton.textContent = "Spela";
    playButton.setAttribute("aria-pressed", "false");
  });
}

// Spela låten, eller pausa den om den redan spelas
function togglePlayback(track, playButton) {
  const isPlaying = track.classList.contains("playing");

  stopAllTracks();

  if (isPlaying) {
    nowPlayingTitle = "";
  } else {
    track.classList.add("playing");
    playButton.textContent = "Pausa";
    playButton.setAttribute("aria-pressed", "true");
    nowPlayingTitle = track.querySelector(".track-title").textContent;
  }

  updateStatusText();
}

// Gilla låten, eller ta bort gillningen om den redan är gillad
function toggleTrackLike(likeButton) {
  const isLiked = likeButton.classList.contains("liked");

  if (isLiked) {
    likeButton.classList.remove("liked");
    likeButton.setAttribute("aria-pressed", "false");
    likedCount = likedCount - 1;
  } else {
    likeButton.classList.add("liked");
    likeButton.setAttribute("aria-pressed", "true");
    likedCount = likedCount + 1;
  }

  updateStatusText();
}

// Koppla knapparna i varje låt. 32 rader blev 12.
tracks.forEach(function (track) {
  const playButton = track.querySelector(".play-button");
  const likeButton = track.querySelector(".like-button");

  playButton.addEventListener("click", function () {
    togglePlayback(track, playButton);
  });

  likeButton.addEventListener("click", function () {
    toggleTrackLike(likeButton);
  });
});

updateStatusText();