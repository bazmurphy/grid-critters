import chapterData from "./chapterData.js";
// console.log(chapterData);

let currentChapterIndex = 0;
let currentLevelIndex = 0;

// const chapterContainer = document.getElementById("chapter-container");
const chapterHeading = document.getElementById("chapter-heading");
const chapterConcepts = document.getElementById("chapter-concepts");
const chapterConceptsCode = document.getElementById("chapter-concepts-code");
const chapterButtonPrevious = document.getElementById(
  "chapter-button-previous"
);
const chapterButtonNext = document.getElementById("chapter-button-next");

// const levelContainer = document.getElementById("level-container");
const levelButtonPrevious = document.getElementById("level-button-previous");
const levelButtonNext = document.getElementById("level-button-next");
const levelHeading = document.getElementById("level-heading");
const levelCode = document.getElementById("level-code");
const levelCells = document.getElementById("level-cells");
const levelPlanet = document.getElementById("level-planet");

function loadChapterContainer() {
  chapterHeading.textContent = `Chapter ${chapterData[currentChapterIndex].chapter}`;
  chapterConcepts.textContent = chapterData[currentChapterIndex].concepts;
  chapterConceptsCode.textContent =
    chapterData[currentChapterIndex].conceptsCode;
  currentLevelIndex = 0;
  loadLevelContainer();
}

function loadLevelContainer() {
  levelCells.innerHTML = "";
  levelPlanet.innerHTML = "";
  const currentChapter = chapterData[currentChapterIndex];
  const currentLevel =
    chapterData[currentChapterIndex].levelData[currentLevelIndex];
  levelHeading.textContent = `Chapter ${currentChapter.chapter} Level ${currentLevel.level}`;
  levelCode.textContent = currentLevel.css;
  currentLevel.blocks.forEach((block) => {
    const cellSmall = document.createElement("div");
    cellSmall.className = `cell-small ${block}-small`;
    levelCells.appendChild(cellSmall);
  });

  // split the CSS string into individual lines
  const cssRules = currentLevel.css.split(/\n\n/);
  // create an empty object to store each of the parsed rules
  const parsedCssRules = {};
  // iterate through each rule and parse selector and properties
  cssRules.forEach((rule) => {
    const [selector, properties] = rule.split("{");
    if (selector && properties) {
      const selectorName = selector.trim();
      const ruleString = properties.replace(/\s+/g, " ").slice(0, -1).trim();
      parsedCssRules[selectorName] = ruleString;
    }
  });

  levelPlanet.style = parsedCssRules.planet;

  currentLevel.blocks.forEach((block, index) => {
    const cell = document.createElement("div");
    cell.className = `cell ${block}`;
    let style = "";
    if (parsedCssRules[block]) {
      style += parsedCssRules[block];
    }
    if (parsedCssRules["terrain"]) {
      style += parsedCssRules["terrain"];
    }
    if (style.length > 0) {
      cell.style = style;
    }
    if (currentLevel.blocksContent) {
      if (currentLevel.blocksContent[index] !== "") {
        cell.textContent = currentLevel.blocksContent[index];
      }
    }
    levelPlanet.appendChild(cell);
  });
}

chapterButtonPrevious.addEventListener("click", () => {
  currentChapterIndex =
    (currentChapterIndex - 1 + chapterData.length) % chapterData.length;
  loadChapterContainer();
});

chapterButtonNext.addEventListener("click", () => {
  currentChapterIndex = (currentChapterIndex + 1) % chapterData.length;
  loadChapterContainer();
});

levelButtonPrevious.addEventListener("click", () => {
  currentLevelIndex =
    (currentLevelIndex -
      1 +
      chapterData[currentChapterIndex].levelData.length) %
    chapterData[currentChapterIndex].levelData.length;
  loadLevelContainer();
});

levelButtonNext.addEventListener("click", () => {
  currentLevelIndex =
    (currentLevelIndex + 1) % chapterData[currentChapterIndex].levelData.length;
  loadLevelContainer();
});

function initialise() {
  loadChapterContainer();
  loadLevelContainer();
}

initialise();
