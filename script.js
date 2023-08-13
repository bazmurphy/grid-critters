import chapters from "./data.js";
// console.log(chapters);

// <header>
//   <h1>Grid Critters</h1>
// </header>
const header = document.createElement("header");
const headerHeading = document.createElement("h1");
headerHeading.textContent = "Grid Critters";
header.appendChild(headerHeading);
document.body.appendChild(header);

// <main></main>;
const main = document.createElement("main");
document.body.appendChild(main);

chapters.forEach((chapter, index) => {
  const chapterContainer = document.createElement("div");
  chapterContainer.className = "chapter-container";

  // <div class="chapter-details">
  //   <h2>Chapter 1</h2>
  //   <h4>Concepts</h4>
  //   <pre>
  //     <code>
  //       display: grid; grid-template-columns: X; grid-template-rows: X;
  //     </code>
  //   </pre>
  //   <div class="chapter-buttons-container">
  //     <button class="previous-button">Previous</button>
  //     <button class="next-button">Next</button>
  //   </div>
  // </div>;

  // <div class="chapter-details"></div>
  const chapterDetails = document.createElement("div");
  chapterDetails.className = "chapter-details";

  // <h2>Chapter 1</h2>
  const chapterDetailsHeading = document.createElement("h2");
  chapterDetailsHeading.textContent = `Chapter ${index + 1}`;

  // const chapterDetailsConcept = document.createElement("h4");
  // chapterDetails.textContent = "Concepts:";

  // create the pre/code block here

  // const buttonsContainer = document.createElement("buttons-container");
  // const previousButton = document.createElement("button");
  // previousButton.className = "previous-button";
  // previousButton.textContent = "Previous";
  // const nextButton = document.createElement("button");
  // nextButton.className = "next-button";
  // nextButton.textContent = "Next";
  // buttonsContainer.appendChild(previousButton);
  // buttonsContainer.appendChild(nextButton);

  chapterDetails.appendChild(chapterDetailsHeading);
  // chapterDetails.appendChild(chapterDetailsConcept);
  // chapterDetails.appendChild(PRE/CODE BLOCK);
  // chapterDetails.appendChild(buttonsContainer);

  // <div class="levels-container"></div>
  const levelsContainer = document.createElement("div");
  levelsContainer.className = "levels-container";

  chapter.forEach((level) => {
    // Split the CSS string into individual rules
    const cssRules = level.css.split(/\n\n/);
    // Initialize an empty object to store the parsed rules
    const parsedRules = {};
    // Iterate through each rule and parse selector and properties
    cssRules.forEach((rule) => {
      const [selector, properties] = rule.split("{");
      if (selector && properties) {
        const selectorName = selector.trim();
        const ruleString = properties.replace(/\s+/g, " ").slice(0, -1).trim();
        parsedRules[selectorName] = ruleString;
      }
    });
    // console.log(parsedRules);

    // <div class="level-container"></div>
    const levelContainer = document.createElement("div");
    levelContainer.className = "level-container";

    // <h3>Chapter 1 Level 3</h3>;
    const levelHeading = document.createElement("h3");
    levelHeading.textContent = `Chapter ${level.chapter} Level ${level.level}`;

    // <pre><code>planet { display: grid; }</code></pre>
    const preBlock = document.createElement("pre");
    const codeBlock = document.createElement("code");
    codeBlock.textContent = level.css;
    preBlock.appendChild(codeBlock);

    // <div class="planet"></div>
    const planet = document.createElement("div");
    planet.className = "planet";
    planet.style = parsedRules.planet;

    // <div class="dunes"></div>
    // <div class="rocky"></div>
    // <div class="grass"></div>
    level.blocks.forEach((block) => {
      const terrain = document.createElement("div");
      terrain.className = block;
      if (parsedRules[block]) {
        terrain.style = parsedRules[block];
      }
      planet.appendChild(terrain);
    });

    levelContainer.appendChild(levelHeading);
    levelContainer.appendChild(preBlock);
    levelContainer.appendChild(planet);

    levelsContainer.appendChild(levelContainer);
  });

  chapterContainer.appendChild(chapterDetails);
  chapterContainer.appendChild(levelsContainer);

  main.appendChild(chapterContainer);
});
