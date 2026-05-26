const animals = [
  { id: 1, file: "001-ant.png", pontic: "Η μερμήκα", greek: "μυρμήγκι", category: "Έντομα" },
  { id: 2, file: "002-baby-goat.png", pontic: "Το κορίτ’", greek: "κατσικάκι", category: "Μαντρί" },
  { id: 3, file: "003-badger.png", pontic: "Ο πουρτσούφον", greek: "ασβός", category: "Δάσος" },
  { id: 4, file: "004-bear-cub.png", pontic: "Το αρκουδ’", greek: "αρκουδάκι", category: "Δάσος" },
  { id: 5, file: "005-bear.png", pontic: "Ο άρκον", greek: "αρκούδα", category: "Δάσος" },
  { id: 6, file: "006-bee.png", pontic: "Το μελεσσίδ’", greek: "μέλισσα", category: "Έντομα" },
  { id: 7, file: "007-buffalo.png", pontic: "Το κομέσ’", greek: "βουβάλι", category: "Μαντρί" },
  { id: 8, file: "008-bull-calf.png", pontic: "Το γαρκόν", greek: "αρσενικό μοσχάρι", category: "Μαντρί" },
  { id: 9, file: "009-butterfly-variant.png", pontic: "Η φαρφατάρα", greek: "πεταλούδα", category: "Έντομα" },
  { id: 10, file: "010-butterfly.png", pontic: "Η πεταλίτρα", greek: "πεταλούδα", category: "Έντομα" },
  { id: 11, file: "011-calf.png", pontic: "Το μουσκάρ’", greek: "μοσχάρι", category: "Μαντρί" },
  { id: 12, file: "012-cat.png", pontic: "Η κάτα", greek: "γάτα", category: "Αυλή" },
  { id: 13, file: "013-chick.png", pontic: "Το πιλίτσ’", greek: "κοτοπουλάκι", category: "Αυλή", audio: "pilits.mp3" },
  { id: 14, file: "014-cow.png", pontic: "Το χτήνον", greek: "αγελάδα", category: "Μαντρί" },
  { id: 15, file: "015-crow-variant.png", pontic: "Η κοχράκα", greek: "κοράκι", category: "Πουλιά" },
  { id: 16, file: "016-crow.png", pontic: "Η κορώνα", greek: "κοράκι", category: "Πουλιά" },
  { id: 17, file: "017-deer.png", pontic: "Το ζουρκάδ’", greek: "ζαρκάδι", category: "Δάσος" },
  { id: 18, file: "018-dog.png", pontic: "Ο σκύλον", greek: "σκύλος", category: "Αυλή" },
  { id: 19, file: "019-eagle.png", pontic: "Ο αϊτέντς", greek: "αετός", category: "Πουλιά" },
  { id: 20, file: "020-female-dog.png", pontic: "Η τσούνα", greek: "σκύλα", category: "Αυλή" },
  { id: 21, file: "021-female-turkey.png", pontic: "Η γαλοπούλα", greek: "γαλοπούλα", category: "Αυλή", pending: true },
  { id: 22, file: "022-firefly.png", pontic: "Η τσαραμπούλα", greek: "πυγολαμπίδα", category: "Έντομα" },
  { id: 23, file: "023-fish.png", pontic: "Τ’ οψάρ’", greek: "ψάρι", category: "Διάφορα" },
  { id: 24, file: "024-fox.png", pontic: "Ο αλεπός", greek: "αλεπού", category: "Δάσος" },
  { id: 25, file: "025-frog.png", pontic: "Η φοθράκα", greek: "βάτραχος", category: "Διάφορα" },
  { id: 26, file: "026-goat.png", pontic: "Τ’ αιγίδ’", greek: "κατσίκι", category: "Μαντρί" },
  { id: 27, file: "027-guinea-fowl.png", pontic: "Φραγκόκοτα", greek: "φραγκόκοτα", category: "Αυλή", pending: true },
  { id: 28, file: "028-hawk.png", pontic: "Το καρτάλ’", greek: "γεράκι", category: "Πουλιά" },
  { id: 29, file: "029-hedgehog.png", pontic: "Ο χοιράχαντον", greek: "σκαντζόχοιρος", category: "Δάσος" },
  { id: 30, file: "030-hen.png", pontic: "Η κοσσάρα", greek: "κότα", category: "Αυλή", audio: "kossara.mp3" },
  { id: 31, file: "031-horse.png", pontic: "Το άλογον", greek: "άλογο", category: "Μαντρί" },
  { id: 32, file: "032-jackal-variant.png", pontic: "Ο θώπεκας", greek: "τσακάλι", category: "Δάσος" },
  { id: 33, file: "033-jackal.png", pontic: "Το τσαναβάρ’", greek: "τσακάλι", category: "Δάσος", audio: "tsanavar.mp3" },
  { id: 34, file: "034-lion.png", pontic: "Το λεοντάρ’", greek: "λιοντάρι", category: "Διάφορα" },
  { id: 35, file: "035-male-cat.png", pontic: "Ο πάρδον", greek: "γάτος", category: "Αυλή" },
  { id: 36, file: "036-mosquito-variant.png", pontic: "Η κανάρα", greek: "κουνούπι", category: "Έντομα" },
  { id: 37, file: "037-mosquito.png", pontic: "Το κωνώπ’", greek: "κουνούπι", category: "Έντομα" },
  { id: 38, file: "038-owl.png", pontic: "Ο χόχορον", greek: "κουκουβάγια", category: "Δάσος" },
  { id: 39, file: "039-ox.png", pontic: "Το βουδ’", greek: "βόδι", category: "Μαντρί" },
  { id: 40, file: "040-pigeon.png", pontic: "Το πελιστέρ’", greek: "περιστέρι", category: "Πουλιά" },
  { id: 41, file: "041-puppy.png", pontic: "Το κουτάβ’", greek: "κουτάβι", category: "Αυλή" },
  { id: 42, file: "042-ram.png", pontic: "Ο κρίαρον", greek: "κριάρι", category: "Μαντρί" },
  { id: 43, file: "043-rooster.png", pontic: "Ο πετεινόν", greek: "κόκορας", category: "Αυλή" },
  { id: 44, file: "044-sheep.png", pontic: "Το πρόατον", greek: "πρόβατο", category: "Μαντρί" },
  { id: 45, file: "045-snail.png", pontic: "Το κοχλίδ’", greek: "σαλιγκάρι", category: "Διάφορα" },
  { id: 46, file: "046-tortoise.png", pontic: "Ο τοσπαγάνον", greek: "χελώνα", category: "Δάσος" },
  { id: 47, file: "047-turkey.png", pontic: "Ο κούρκον", greek: "γάλος", category: "Αυλή" },
  { id: 48, file: "048-wolf-cub.png", pontic: "Το λυκούδ’", greek: "λυκάκι", category: "Δάσος" },
  { id: 49, file: "049-wolf.png", pontic: "Ο λύκον", greek: "λύκος", category: "Δάσος" },
  { id: 50, file: "050-worm.png", pontic: "Το σκωλέκ’", greek: "σκουλήκι", category: "Διάφορα" },
  { id: 51, file: "051-young-cow.png", pontic: "Τ’ αγελάδ’", greek: "νεαρή αγελάδα", category: "Μαντρί" },
  { id: 52, file: "052-young-hen.png", pontic: "Η νοσσάκα", greek: "πουλάδα", category: "Αυλή" }
];

const categories = ["Όλα", "Αυλή", "Μαντρί", "Έντομα", "Δάσος", "Διάφορα", "Πουλιά"];
const animalPath = (animal) => `./assets/animals/${animal.file}`;
const audioPath = (animal) => animal.audio ? `./assets/audio/${animal.audio}` : "";

let mode = "play";
let score = Number(localStorage.getItem("pontic-score") || 0);
let streak = 0;
let target = null;
let locked = false;
let activeCategory = "Όλα";
let found = new Set(JSON.parse(localStorage.getItem("pontic-found") || "[]"));

const $ = (selector) => document.querySelector(selector);
const scoreEl = $("#score");
const choicesEl = $("#choices");
const feedbackEl = $("#feedback");
const targetWordEl = $("#target-word");
const targetTranslationEl = $("#target-translation");
const categoryLabelEl = $("#category-label");
const streakLabelEl = $("#streak-label");
const soundButton = $("#sound-button");
const animalGrid = $("#animal-grid");
const collectionGrid = $("#collection-grid");
const searchInput = $("#search-input");
const categoryStrip = $("#category-strip");
const collectionCount = $("#collection-count");
const progressBar = $("#progress-bar");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function saveProgress() {
  localStorage.setItem("pontic-score", String(score));
  localStorage.setItem("pontic-found", JSON.stringify([...found]));
}

function setMode(nextMode) {
  mode = nextMode;
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === `${mode}-view`);
  });
  if (mode === "learn") renderLearn();
  if (mode === "collection") renderCollection();
}

function nextRound() {
  locked = false;
  feedbackEl.textContent = "";
  target = animals[Math.floor(Math.random() * animals.length)];
  const distractors = sample(animals.filter((animal) => animal.id !== target.id), 3);
  const options = shuffle([target, ...distractors]);

  targetWordEl.textContent = target.pontic;
  targetTranslationEl.textContent = target.greek;
  categoryLabelEl.textContent = target.category;
  streakLabelEl.textContent = `Σερί ${streak}`;
  soundButton.disabled = !target.audio;
  soundButton.title = target.audio ? "Άκουσε τη λέξη" : "Δεν υπάρχει ακόμα ηχητικό";
  soundButton.style.opacity = target.audio ? "1" : "0.42";

  choicesEl.innerHTML = options.map((animal) => `
    <button class="choice-card" type="button" data-id="${animal.id}" aria-label="${animal.greek}">
      <span class="image-box">
        <img src="${animalPath(animal)}" alt="${animal.greek}" draggable="false" />
      </span>
      <span class="choice-name">${animal.greek}</span>
    </button>
  `).join("");
}

function playAudio(animal) {
  const src = audioPath(animal);
  if (!src) return;
  new Audio(src).play().catch(() => {});
}

function handleChoice(event) {
  const card = event.target.closest(".choice-card");
  if (!card || locked) return;

  const chosen = Number(card.dataset.id);
  const isCorrect = chosen === target.id;
  locked = true;

  document.querySelectorAll(".choice-card").forEach((button) => {
    const buttonId = Number(button.dataset.id);
    button.disabled = true;
    if (buttonId === target.id) button.classList.add("correct");
  });

  if (isCorrect) {
    score += 10;
    streak += 1;
    found.add(target.id);
    feedbackEl.textContent = `Μπράβο! ${target.pontic} σημαίνει ${target.greek}.`;
    playAudio(target);
  } else {
    streak = 0;
    card.classList.add("wrong");
    feedbackEl.textContent = `Προσπάθησε ξανά στον επόμενο γύρο. Η σωστή εικόνα είναι: ${target.greek}.`;
  }

  scoreEl.textContent = score;
  streakLabelEl.textContent = `Σερί ${streak}`;
  saveProgress();
  setTimeout(nextRound, isCorrect ? 950 : 1450);
}

function animalCard(animal, lockedCard = false) {
  return `
    <article class="animal-card ${lockedCard ? "locked" : ""}">
      ${animal.audio ? `<span class="audio-mark" title="Έχει ηχητικό">▶</span>` : ""}
      <span class="image-box">
        <img src="${animalPath(animal)}" alt="${animal.greek}" draggable="false" />
      </span>
      <h3>${lockedCard ? "Κλειδωμένο" : animal.pontic}</h3>
      <p>${lockedCard ? "Βρες το στο παιχνίδι" : animal.greek}</p>
    </article>
  `;
}

function renderCategoryStrip() {
  categoryStrip.innerHTML = categories.map((category) => `
    <button class="category-button ${category === activeCategory ? "is-active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderLearn() {
  renderCategoryStrip();
  const query = searchInput.value.trim().toLocaleLowerCase("el");
  const filtered = animals.filter((animal) => {
    const inCategory = activeCategory === "Όλα" || animal.category === activeCategory;
    const text = `${animal.pontic} ${animal.greek} ${animal.category}`.toLocaleLowerCase("el");
    return inCategory && text.includes(query);
  });
  animalGrid.innerHTML = filtered.map((animal) => animalCard(animal)).join("");
}

function renderCollection() {
  const total = animals.length;
  const count = found.size;
  collectionCount.textContent = `${count} από ${total}`;
  progressBar.style.width = `${Math.round((count / total) * 100)}%`;
  collectionGrid.innerHTML = animals.map((animal) => animalCard(animal, !found.has(animal.id))).join("");
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

choicesEl.addEventListener("click", handleChoice);

soundButton.addEventListener("click", () => {
  if (target) playAudio(target);
});

categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest(".category-button");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderLearn();
});

searchInput.addEventListener("input", renderLearn);

scoreEl.textContent = score;
renderLearn();
renderCollection();
nextRound();
