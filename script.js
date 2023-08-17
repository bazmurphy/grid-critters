import chapterData from "./chapterData.js";
console.log(chapterData);

// <header></header>
const header = document.createElement("header");

const headerHeading = document.createElement("h1");
headerHeading.id = "header-heading";

const headerHeadingLink = document.createElement("a");
headerHeadingLink.id = "header-heading-link";
headerHeadingLink.textContent = "Grid Critters";
headerHeadingLink.href = "#";
headerHeadingLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
});

headerHeading.appendChild(headerHeadingLink);

const headerNavigation = document.createElement("nav");
headerNavigation.id = "header-navigation";

const headerNavigationButton = document.createElement("button");
headerNavigationButton.id = "header-navigation-button";
headerNavigationButton.textContent = "≡";

const headerNavigationList = document.createElement("ol");
headerNavigationList.id = "header-navigation-list";

headerNavigation.appendChild(headerNavigationButton);
headerNavigation.appendChild(headerNavigationList);

header.appendChild(headerHeading);
header.appendChild(headerNavigation);

document.body.appendChild(header);

headerNavigationButton.addEventListener("click", () => {
  if (headerNavigationList.classList.contains("show-menu")) {
    headerNavigationButton.textContent = "≡";
  } else {
    headerNavigationButton.textContent = "X";
  }
  headerNavigationList.classList.toggle("show-menu");
});

// <main></main>;
const main = document.createElement("main");
document.body.appendChild(main);

chapterData.forEach((chapter) => {
  const headerNavigationListItem = document.createElement("li");
  headerNavigationListItem.className = "header-navigation-list-item";
  const headerNavigationLink = document.createElement("a");
  headerNavigationLink.className = "header-navigation-link";
  headerNavigationLink.textContent = `Chapter ${chapter.chapter}`;
  headerNavigationLink.href = `#chapter-${chapter.chapter}`;

  headerNavigationLink.addEventListener("click", (event) => {
    event.preventDefault();
    const chapterHeading = document.querySelector(
      `#chapter-${chapter.chapter}`
    );
    // adjust this to match sticky header height
    const offset = -90;
    const targetPosition =
      chapterHeading.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // duplication(!) - header navigation logic:
    if (headerNavigationList.classList.contains("show-menu")) {
      headerNavigationButton.textContent = "≡";
    } else {
      headerNavigationButton.textContent = "X";
    }
    headerNavigationList.classList.toggle("show-menu");
  });

  headerNavigationListItem.appendChild(headerNavigationLink);
  headerNavigationList.append(headerNavigationListItem);

  // <div class="chapter-container"></div>
  const chapterContainer = document.createElement("div");
  chapterContainer.className = "chapter-container";

  // <div class="chapter-details"></div>
  const chapterDetails = document.createElement("div");
  chapterDetails.className = "chapter-details";

  // <h2>Chapter 1</h2>
  const chapterHeading = document.createElement("h2");
  chapterHeading.textContent = `Chapter ${chapter.chapter}`;
  chapterHeading.id = `chapter-${chapter.chapter}`;
  chapterDetails.appendChild(chapterHeading);

  // <p>concepts</p>
  if (chapter.concepts.length > 0) {
    const chapterConceptsParagraph = document.createElement("p");
    chapterConceptsParagraph.textContent = chapter.concepts;
    chapterDetails.appendChild(chapterConceptsParagraph);
  }

  //   <pre>
  //     <code>
  //       display: grid; grid-template-columns: X; grid-template-rows: X;
  //     </code>
  //   </pre>
  if (chapter.conceptsCode.length > 0) {
    const chapterConceptsPreBlock = document.createElement("pre");
    const chapterConceptsCodeBlock = document.createElement("code");
    chapterConceptsCodeBlock.textContent = chapter.conceptsCode;
    chapterConceptsPreBlock.appendChild(chapterConceptsCodeBlock);
    chapterDetails.appendChild(chapterConceptsPreBlock);
  }

  // const buttonsContainer = document.createElement("buttons-container");
  // const previousButton = document.createElement("button");
  // previousButton.className = "previous-button";
  // previousButton.textContent = "Previous";
  // const nextButton = document.createElement("button");
  // nextButton.className = "next-button";
  // nextButton.textContent = "Next";
  // buttonsContainer.appendChild(previousButton);
  // buttonsContainer.appendChild(nextButton);
  // chapterDetails.appendChild(buttonsContainer);

  // <div class="levels-container"></div>
  const levelsContainer = document.createElement("div");
  levelsContainer.className = "levels-container";

  chapter.levelData.forEach((level) => {
    // <div class="level-container"></div>
    const levelContainer = document.createElement("div");
    levelContainer.className = "level-container";

    // <h3>Chapter 1 Level 3</h3>;
    const levelHeading = document.createElement("h3");
    levelHeading.textContent = `Chapter ${level.chapter} Level ${level.level}`;
    levelContainer.appendChild(levelHeading);

    // <pre><code>planet { display: grid; }</code></pre>
    const levelPreBlock = document.createElement("pre");
    const levelCodeBlock = document.createElement("code");
    levelCodeBlock.textContent = level.css;
    levelPreBlock.appendChild(levelCodeBlock);
    levelContainer.appendChild(levelPreBlock);

    const terrainOrderContainer = document.createElement("div");
    terrainOrderContainer.className = "terrain-order-container";
    const terrainOrderCells = document.createElement("p");
    terrainOrderCells.textContent = "Order:";
    terrainOrderContainer.appendChild(terrainOrderCells);
    level.blocks.forEach((block) => {
      const terrainSmall = document.createElement("div");
      terrainSmall.className = `terrain-small ${block}-small`;
      terrainOrderContainer.appendChild(terrainSmall);
    });

    levelContainer.appendChild(terrainOrderContainer);

    // split the CSS string into individual lines
    const cssRules = level.css.split(/\n\n/);
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
    // console.log(parsedCssRules);

    // <div class="planet-container">
    //   <div class="planet"></div>
    // </div>
    const planetContainer = document.createElement("div");
    planetContainer.className = "planet-container";

    const planet = document.createElement("div");
    planet.className = "planet";

    planet.style = parsedCssRules.planet;

    // <div class="dunes"></div>
    // <div class="rocky"></div>
    // <div class="grass"></div>
    level.blocks.forEach((block, index) => {
      const terrain = document.createElement("div");
      terrain.className = `terrain ${block}`;

      let style = "";

      if (parsedCssRules[block]) {
        style += parsedCssRules[block];
      }

      if (parsedCssRules["terrain"]) {
        console.log(parsedCssRules["terrain"]);
        style += parsedCssRules["terrain"];
      }

      if (style.length > 0) {
        terrain.style = style;
      }

      if (level.blocksContent && level.blocksContent.length > 0) {
        if (level.blocksContent[index] !== "") {
          terrain.textContent = level.blocksContent[index];
        }
      }

      planet.appendChild(terrain);
    });

    planetContainer.appendChild(planet);

    levelContainer.appendChild(planetContainer);

    levelsContainer.appendChild(levelContainer);
  });

  chapterContainer.appendChild(chapterDetails);
  chapterContainer.appendChild(levelsContainer);

  main.appendChild(chapterContainer);
});
