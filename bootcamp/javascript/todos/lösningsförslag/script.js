/* Att göra, LÖSNINGSFÖRSLAG.

   Data ligger i arrayen. Sidan byggs alltid från arrayen.
   När något ändras ändrar vi arrayen först och ritar sedan om. */

const tasks = [
  { text: "Läsa om arrayer på MDN", done: true },
  { text: "Göra klart Loopen", done: false },
  { text: "Köpa kaffe till klassrummet", done: false },
  { text: "Pusha till GitHub", done: false }
];

/* --------------------------------------------------------------
   Hitta elementen
   -------------------------------------------------------------- */

const taskList = document.querySelector("#task-list");
const addForm = document.querySelector("#add-form");
const newTaskInput = document.querySelector("#new-task");
const statusText = document.querySelector("#status");

/* --------------------------------------------------------------
   Rita ut listan (steg 2 till 4 och 6)
   -------------------------------------------------------------- */

function renderList() {
  // Töm listan först, annars ritas allt ut en gång till under det gamla
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    // <li class="task">
    const item = document.createElement("li");
    item.classList.add("task");

    if (task.done === true) {
      item.classList.add("done");
    }

    // <label>
    const label = document.createElement("label");

    // <input type="checkbox">
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    // <span class="task-text">
    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = task.text;

    // Steg 6: bocka av. Ändra objektet, rita sedan om.
    checkbox.addEventListener("change", function () {
      task.done = checkbox.checked;
      renderList();
    });

    // Om du hinner mer: ta bort-knappen
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Ta bort";
    removeButton.setAttribute("aria-label", "Ta bort " + task.text);

    removeButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderList();
    });

    // Sätt ihop bitarna, inifrån och ut
    label.appendChild(checkbox);
    label.appendChild(text);
    item.appendChild(label);
    item.appendChild(removeButton);
    taskList.appendChild(item);
  });

  renderStatus();
}

/* --------------------------------------------------------------
   Om du hinner mer: hur många är kvar?
   -------------------------------------------------------------- */

function renderStatus() {
  let remaining = 0;

  tasks.forEach(function (task) {
    if (task.done === false) {
      remaining = remaining + 1;
    }
  });

  if (tasks.length === 0) {
    statusText.textContent = "Listan är tom";
  } else if (remaining === 0) {
    statusText.textContent = "Allt är klart";
  } else {
    statusText.textContent = remaining + " kvar att göra";
  }
}

/* --------------------------------------------------------------
   Lägg till en ny uppgift (steg 5)
   -------------------------------------------------------------- */

addForm.addEventListener("submit", function (event) {
  // Ett formulär laddar om sidan när det skickas. Det vill vi inte.
  event.preventDefault();

  const text = newTaskInput.value.trim();

  // Tom rad? Gör ingenting.
  if (text === "") {
    return;
  }

  tasks.push({ text: text, done: false });

  newTaskInput.value = "";
  renderList();
});

/* --------------------------------------------------------------
   Rita ut listan en första gång när sidan laddas
   -------------------------------------------------------------- */

renderList();
