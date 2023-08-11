const allChaptersContainers = Array.from(
  document.getElementsByClassName("chapter-container")
);
// console.log(allChaptersContainers);

allChaptersContainers.forEach((chapterContainer) => {
  // console.log(chapterContainer);
  const previousButton = chapterContainer.querySelector(".previous-button");
  // console.log(previousButton);
  const nextButton = chapterContainer.querySelector(".next-button");
  // console.log(nextButton);
  const levelsContainer = chapterContainer.querySelector(".levels-container");
  // console.log(levelsContainer);

  previousButton.addEventListener("click", () => {});
  nextButton.addEventListener("click", () => {});

  function updateLevel() {}
});

// let currentIndex = 0;

// previousButton.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + levelsContainer.children.length) %
//     levelsContainer.children.length;
//   updateLevel();
// });

// nextButton.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % levelsContainer.children.length;
//   updateLevel();
// });

// const updateLevel = () => {
//   const cardWidth = levelsContainer.children[0].offsetWidth;
//   const translateX = -currentIndex * cardWidth;
//   levelsContainer.style.transform = `translateX(${translateX}px)`;
// };
