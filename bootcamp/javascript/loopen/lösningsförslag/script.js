/* Loopen, lösningsförslag.
   Skrivet med det ni har sett: querySelector, addEventListener,
   textContent, classList, setAttribute, const och let, if och else.
   Inga arrayer och inga loopar. Det kommer nästa vecka. */

/* Elementen utanför listan */
const likedCountText = document.querySelector("#liked-count");
const playerText = document.querySelector("#now-playing");

/* Låtarna */
const track1 = document.querySelector("#track-1");
const track2 = document.querySelector("#track-2");
const track3 = document.querySelector("#track-3");
const track4 = document.querySelector("#track-4");

const playButton1 = document.querySelector("#play-1");
const playButton2 = document.querySelector("#play-2");
const playButton3 = document.querySelector("#play-3");
const playButton4 = document.querySelector("#play-4");

const likeButton1 = document.querySelector("#like-1");
const likeButton2 = document.querySelector("#like-2");
const likeButton3 = document.querySelector("#like-3");
const likeButton4 = document.querySelector("#like-4");

/* Sidans tillstånd. Sidan minns ingenting själv, så vi minns åt den. */
let currentTitle = "";
let likedCount = 0;

/* En enda funktion som skriver ut tillståndet. Allt annat ändrar
   bara variablerna och ber den här rita om. */
function renderPage() {
  if (currentTitle === "") {
    playerText.textContent = "Ingenting spelas just nu";
  } else {
    playerText.textContent = "Spelar nu: " + currentTitle;
  }

  likedCountText.textContent = likedCount;

  if (likedCount > 0) {
    likedCountText.classList.add("has-items");
  } else {
    likedCountText.classList.remove("has-items");
  }
}

/* Bara en låt kan spelas åt gången, så vi släcker alla först. */
function resetAllPlayButtons() {
  track1.classList.remove("playing");
  track2.classList.remove("playing");
  track3.classList.remove("playing");
  track4.classList.remove("playing");

  playButton1.textContent = "Spela";
  playButton2.textContent = "Spela";
  playButton3.textContent = "Spela";
  playButton4.textContent = "Spela";

  playButton1.setAttribute("aria-pressed", "false");
  playButton2.setAttribute("aria-pressed", "false");
  playButton3.setAttribute("aria-pressed", "false");
  playButton4.setAttribute("aria-pressed", "false");
}

function togglePlay(track, button) {
  /* Spelade den redan? Då är klicket en paus. */
  const isPlaying = track.classList.contains("playing");

  resetAllPlayButtons();

  if (isPlaying) {
    currentTitle = "";
  } else {
    track.classList.add("playing");
    button.textContent = "Pausa";
    button.setAttribute("aria-pressed", "true");
    /* Titeln står redan i HTML. Hämta den därifrån i stället för
       att skriva samma text en gång till. */
    currentTitle = track.querySelector(".track-title").textContent;
  }

  renderPage();
}

function toggleLike(button) {
  const isLiked = button.classList.toggle("liked");

  if (isLiked) {
    likedCount = likedCount + 1;
  } else {
    likedCount = likedCount - 1;
  }

  button.setAttribute("aria-pressed", isLiked);
  renderPage();
}

/* Koppla knapparna.
   Fyra nästan identiska block. Det är avsiktligt, och den irritationen
   är precis vad som gör loopar meningsfulla nästa vecka. */

playButton1.addEventListener("click", function () {
  togglePlay(track1, playButton1);
});

playButton2.addEventListener("click", function () {
  togglePlay(track2, playButton2);
});

playButton3.addEventListener("click", function () {
  togglePlay(track3, playButton3);
});

playButton4.addEventListener("click", function () {
  togglePlay(track4, playButton4);
});

likeButton1.addEventListener("click", function () {
  toggleLike(likeButton1);
});

likeButton2.addEventListener("click", function () {
  toggleLike(likeButton2);
});

likeButton3.addEventListener("click", function () {
  toggleLike(likeButton3);
});

likeButton4.addEventListener("click", function () {
  toggleLike(likeButton4);
});

