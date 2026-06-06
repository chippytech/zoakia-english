const animals = [
{ id: 1, file: "001-ant.png", english: "Ant", category: "Insects" },
{ id: 2, file: "002-baby-goat.png", english: "Baby Goat (Kid)", category: "Barn" },
{ id: 3, file: "003-badger.png", english: "Badger", category: "Forest" },
{ id: 4, file: "004-bear-cub.png", english: "Bear Cub", category: "Forest" },
{ id: 5, file: "005-bear.png", english: "Bear", category: "Forest" },
{ id: 6, file: "006-bee.png", english: "Bee", category: "Insects" },
{ id: 7, file: "007-buffalo.png", english: "Buffalo", category: "Barn" },
{ id: 8, file: "008-bull-calf.png", english: "Bull Calf", category: "Barn" },
{ id: 9, file: "009-butterfly-variant.png", english: "Butterfly", category: "Insects" },
{ id: 10, file: "010-butterfly.png", english: "Butterfly", category: "Insects" },
{ id: 11, file: "011-calf.png", english: "Calf", category: "Barn" },
{ id: 12, file: "012-cat.png", english: "Cat", category: "Farmyard" },
{ id: 13, file: "013-chick.png", english: "Chick", category: "Farmyard", audio: "pilits.mp3" },
{ id: 14, file: "014-cow.png", english: "Cow", category: "Barn" },
{ id: 15, file: "015-crow-variant.png", english: "Crow", category: "Birds" },
{ id: 16, file: "016-crow.png", english: "Crow", category: "Birds" },
{ id: 17, file: "017-deer.png", english: "Deer", category: "Forest" },
{ id: 18, file: "018-dog.png", english: "Dog", category: "Farmyard" },
{ id: 19, file: "019-eagle.png", english: "Eagle", category: "Birds" },
{ id: 20, file: "020-female-dog.png", english: "Female Dog (Bitch)", category: "Farmyard" },
{ id: 21, file: "021-female-turkey.png", english: "Female Turkey", category: "Farmyard", pending: true },
{ id: 22, file: "022-firefly.png", english: "Firefly", category: "Insects" },
{ id: 23, file: "023-fish.png", english: "Fish", category: "Miscellaneous" },
{ id: 24, file: "024-fox.png", english: "Fox", category: "Forest" },
{ id: 25, file: "025-frog.png", english: "Frog", category: "Miscellaneous" },
{ id: 26, file: "026-goat.png", english: "Goat", category: "Barn" },
{ id: 27, file: "027-guinea-fowl.png", english: "Guinea Fowl", category: "Farmyard", pending: true },
{ id: 28, file: "028-hawk.png", english: "Hawk", category: "Birds" },
{ id: 29, file: "029-hedgehog.png", english: "Hedgehog", category: "Forest" },
{ id: 30, file: "030-hen.png", english: "Hen", category: "Farmyard", audio: "kossara.mp3" },
{ id: 31, file: "031-horse.png", english: "Horse", category: "Barn" },
{ id: 32, file: "032-jackal-variant.png", english: "Jackal", category: "Forest" },
{ id: 33, file: "033-jackal.png", english: "Jackal", category: "Forest", audio: "tsanavar.mp3" },
{ id: 34, file: "034-lion.png", english: "Lion", category: "Miscellaneous" },
{ id: 35, file: "035-male-cat.png", english: "Male Cat (Tomcat)", category: "Farmyard" },
{ id: 36, file: "036-mosquito-variant.png", english: "Mosquito", category: "Insects" },
{ id: 37, file: "037-mosquito.png", english: "Mosquito", category: "Insects" },
{ id: 38, file: "038-owl.png", english: "Owl", category: "Forest" },
{ id: 39, file: "039-ox.png", english: "Ox", category: "Barn" },
{ id: 40, file: "040-pigeon.png", english: "Pigeon", category: "Birds" },
{ id: 41, file: "041-puppy.png", english: "Puppy", category: "Farmyard" },
{ id: 42, file: "042-ram.png", english: "Ram", category: "Barn" },
{ id: 43, file: "043-rooster.png", english: "Rooster", category: "Farmyard" },
{ id: 44, file: "044-sheep.png", english: "Sheep", category: "Barn" },
{ id: 45, file: "045-snail.png", english: "Snail", category: "Miscellaneous" },
{ id: 46, file: "046-tortoise.png", english: "Tortoise", category: "Forest" },
{ id: 47, file: "047-turkey.png", english: "Turkey", category: "Farmyard" },
{ id: 48, file: "048-wolf-cub.png", english: "Wolf Cub", category: "Forest" },
{ id: 49, file: "049-wolf.png", english: "Wolf", category: "Forest" },
{ id: 50, file: "050-worm.png", english: "Worm", category: "Miscellaneous" },
{ id: 51, file: "051-young-cow.png", english: "Young Cow (Heifer)", category: "Barn" },
{ id: 52, file: "052-young-hen.png", english: "Young Hen (Pullet)", category: "Farmyard" }
];

const categories = ["All", "Farmyard", "Barn", "Insectss", "Forest", "Miscellaneous", "Birds"];
const animalPath = (animal) => `./assets/animals/${animal.file}`;
const audioPath = (animal) => animal.audio ? `./assets/audio/${animal.audio}` : "";

let mode = "play";
let score = Number(localStorage.getItem("pontic-score") || 0);
let streak = 0;
let target = null;
let locked = false;
let activeCategory = "All";
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
streakLabelEl.textContent = `Streak ${streak}`;
soundButton.title = target.audio
  ? "Listen to the word"
  : "No audio available yet";

soundButton.style.opacity = target.audio
  ? "1"
  : "0.42";
  
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
feedbackEl.textContent = `Well done! ${target.pontic} means ${target.greek}.`;
playAudio(target);
} else {
streak = 0;
card.classList.add("wrong");
feedbackEl.textContent = `Try again next round. The correct image is: ${target.greek}.`;
}

scoreEl.textContent = score;
streakLabelEl.textContent = `Serion ${streak}`;
saveProgress();
setTimeout(nextRound, isCorrect ? 950 : 1450);
}

function animalCard(animal, lockedCard = false) {
return `
<article class="animal-card ${lockedCard ? "locked" : ""}">
${animal.audio ? `<span class="audio-mark" title="Has audio">▶</span>` : ""}
<span class="image-box">
<img src="${animalPath(animal)}" alt="${animal.greek}" draggable="false" />
</span>
<h3>${lockedCard ? "Locked" : animal.pontic}</h3>
<p>${lockedCard ? "Find it in the game" : animal.greek}</p>
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
const inCategory = activeCategory === "All" || animal.category === activeCategory;
  const text = `${animal.pontic} ${animal.greek} ${animal.category}`.toLocaleLowerCase("el");
return inCategory && text.includes(query);
});
animalGrid.innerHTML = filtered.map((animal) => animalCard(animal)).join("");
}

function renderCollection() {
const total = animals.length;
const count = found.size;
collectionCount.textContent = `${count} of ${total}`;
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
