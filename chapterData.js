const chapterData = [
  {
    chapter: 1,
    concepts: "grid, grid-template-columns, grid-template-rows",
    conceptsCode: `display: grid; 
grid-template-columns: X; 
grid-template-rows: X;`,
    levelData: [
      {
        chapter: 1,
        level: 3,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
}`,
      },
      {
        chapter: 1,
        level: 4,
        blocks: ["dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-rows: 100px 200px;
}`,
      },
      {
        chapter: 1,
        level: 5,
        blocks: ["dunes", "rocky", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 100px 200px 100px;
}`,
      },
      {
        chapter: 1,
        level: 6,
        blocks: ["dunes", "rocky", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}`,
      },
      {
        chapter: 1,
        level: 7,
        blocks: ["rocky", "grass", "dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 100px;
}`,
      },
      {
        chapter: 1,
        level: 8,
        blocks: [
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
}`,
      },
      {
        chapter: 1,
        level: 9,
        blocks: ["rocky", "rocky", "rocky", "rocky", "rocky", "rocky", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}`,
      },
      {
        chapter: 1,
        level: 10,
        blocks: ["dunes", "rocky", "dunes", "rocky", "dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 50px 100px);
}`,
      },
      {
        chapter: 1,
        level: 12,
        blocks: ["rocky", "grass", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}`,
      },
      {
        chapter: 1,
        level: 13,
        blocks: ["dunes", "rocky", "rocky", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
}`,
      },
      {
        chapter: 1,
        level: 14,
        blocks: ["dunes", "dunes", "rocky", "rocky", "dunes", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 20vh 1fr 20vh;
}`,
      },
      {
        chapter: 1,
        level: 15,
        blocks: ["grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 20vw;
  grid-template-rows: repeat(5, 1fr);
}`,
      },
      {
        chapter: 1,
        level: 16,
        blocks: ["dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 50%;
}`,
      },
      {
        chapter: 1,
        level: 17,
        blocks: [
          "grass",
          "grass",
          "grass",
          "grass",
          "dunes",
          "grass",
          "grass",
          "grass",
          "grass",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: 1fr 100px 1fr;
}`,
      },
      {
        chapter: 1,
        level: 18,
        blocks: ["grass", "grass", "grass", "rocky", "dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 2fr 10% 1fr;
  grid-template-rows: 200px 1fr;
}`,
      },
      {
        chapter: 1,
        level: 19,
        blocks: ["grass", "grass", "grass", "dunes", "rocky", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 25% 25%;
  grid-template-rows: 1fr 1fr 50px;
}`,
      },
      {
        chapter: 1,
        level: 20,
        blocks: ["dunes", "rocky", "dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 50px 1fr);
}`,
      },
      {
        chapter: 1,
        level: 21,
        blocks: ["dunes", "dunes", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}`,
      },
    ],
  },
  {
    chapter: 2,
    concepts: "grid gaps",
    conceptsCode: `column-gap: X;
row-gap: X;
gap: X;`,
    levelData: [
      {
        chapter: 2,
        level: 1,
        blocks: ["rocky", "dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 50px;
}`,
      },
      {
        chapter: 2,
        level: 2,
        blocks: ["dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
}`,
      },
      {
        chapter: 2,
        level: 3,
        blocks: ["rocky", "grass", "rocky", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 100px;
  row-gap: 100px;
}`,
      },
      {
        chapter: 2,
        level: 4,
        blocks: ["dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
}`,
      },
      {
        chapter: 2,
        level: 5,
        blocks: ["rocky", "grass", "rocky", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 100px;
  row-gap: 100px;
}`,
      },
      {
        chapter: 2,
        level: 6,
        blocks: ["dunes", "grass", "dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 200px;
}`,
      },
      {
        chapter: 2,
        level: 7,
        blocks: ["dunes", "grass", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 75px) 1fr;
  column-gap: 30px;
}`,
      },
      {
        chapter: 2,
        level: 8,
        blocks: [
          "grass",
          "grass",
          "grass",
          "dunes",
          "dunes",
          "dunes",
          "grass",
          "grass",
          "grass",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5vh 10%;
}`,
      },
      {
        chapter: 2,
        level: 9,
        blocks: ["dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
}`,
      },
      {
        chapter: 2,
        level: 11,
        blocks: [
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  gap: 50px;
}`,
      },
      {
        chapter: 2,
        level: 12,
        blocks: ["grass", "grass", "grass", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px;
}`,
      },
      {
        chapter: 2,
        level: 13,
        blocks: ["grass", "grass", "grass", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px;
}`,
      },
      {
        chapter: 2,
        level: 14,
        blocks: ["dunes", "grass", "grass", "grass", "grass"],
        css: `planet {
  display: grid;
  grid-template-rows: 200px repeat(4, 1fr);
  row-gap: 10px;
}`,
      },
      {
        chapter: 2,
        level: 15,
        blocks: ["grass", "grass", "rocky", "rocky", "grass", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 300px 1fr;
  grid-column-gap: 5%;
  grid-row-gap: 10%;
}`,
      },
      {
        chapter: 2,
        level: 16,
        blocks: ["grass", "dunes", "grass", "grass", "dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 5vw;
}`,
      },
      {
        chapter: 2,
        level: 17,
        blocks: [
          "grass",
          "rocky",
          "grass",
          "grass",
          "rocky",
          "grass",
          "grass",
          "rocky",
          "grass",
          "grass",
          "rocky",
          "grass",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 3fr 200px;
  grid-template-rows: repeat(4, 1fr);
  column-gap: 20px;
}`,
      },
      {
        chapter: 2,
        level: 18,
        blocks: ["dunes", "rocky", "grass", "grass", "rocky", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50% 1fr;
  column-gap: 200px;
}`,
      },
      {
        chapter: 2,
        level: 19,
        blocks: ["dunes", "rocky", "grass", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 70%;
}`,
      },
    ],
  },
  {
    chapter: 3,
    concepts: "item placement by grid line",
    conceptsCode: `grid-template-columns: [left] 10% 1fr 10% [right];
grid-template-rows: [top] 10% 1fr 10% [bottom];
grid-row-start: X;
grid-column-start: X;
grid-row-end: X;
grid-column-end: X;
grid-row: X / X;
grid-column: X / X;
grid-area: X / X / X / X;`,
    levelData: [
      {
        chapter: 3,
        level: 3,
        blocks: ["grass", "rocky"],
        css: `planet {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}

rocky {
  grid-row-start: 3;
}`,
      },
      {
        chapter: 3,
        level: 4,
        blocks: ["grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

grass {
  grid-column-start: 3; 
}`,
      },
      {
        chapter: 3,
        level: 6,
        blocks: ["rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 200px 1fr 1fr 100px;
  grid-template-rows: 200px 1fr 1fr 100px;
}

rocky {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
}`,
      },
      {
        chapter: 3,
        level: 7,
        blocks: ["grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 15% 1fr 1fr 15%;
  grid-template-rows: 15% 1fr 1fr 15%;
}

grass {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-end: -2;
}`,
      },
      {
        chapter: 3,
        level: 8,
        blocks: ["rocky", "grass", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

dunes {
  grid-row-end: span 3;
}

grass {
  grid-row-start: 2;
`,
      },
      {
        chapter: 3,
        level: 9,
        blocks: ["rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 2fr;
  grid-template-rows: repeat(4, 1fr);
}

dunes {
  grid-row-start: span 3;
  grid-row-end: span 4;
  grid-column-end: 4;
  grid-column-start: span 2;
}

rocky {
  grid-row-end: 5;
  grid-row-start: span 3;
}`,
      },
      {
        chapter: 3,
        level: 10,
        blocks: ["rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

rocky {
  grid-column: 2 / 4;
  grid-row: 2 / 5;
}`,
      },
      {
        chapter: 3,
        level: 11,
        blocks: ["dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: [start] 1fr 1fr [center] 1fr 1fr [end];
  grid-template-rows: [top] 1fr 1fr [bottom];
}

dunes {
  grid-row-start: 2;
  grid-column-start: center;
  grid-column-end: end;
}

rocky {
  grid-row: top / bottom;
  grid-column: start / center;
}`,
      },
      {
        chapter: 3,
        level: 12,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr [middle center] 1fr;
  grid-template-rows: 1fr [neat-line awesome-line] 1fr;
}

dunes {
  grid-column: center;
  grid-row: awesome-line;
}`,
      },
      {
        chapter: 3,
        level: 13,
        blocks: ["grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr repeat(5, [grass] 50px) [grass] 1fr;
  grid-template-rows: 1fr;
}

grass {
  grid-column: grass 2 / grass 5;
}`,
      },
      {
        chapter: 3,
        level: 15,
        blocks: ["rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

rocky {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}`,
      },
      {
        chapter: 3,
        level: 16,
        blocks: ["dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
}

dunes {
  grid-row: 3 / 6;
}`,
      },
      {
        chapter: 3,
        level: 17,
        blocks: ["dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 20vw;
  grid-row-gap: 20px;
}

dunes {
  grid-column:2 / 3;
}

rocky {
  grid-row: 2 / 4;
}`,
      },
      {
        chapter: 3,
        level: 18,
        blocks: ["rocky", "grass", "grass", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

rocky {
  grid-column-start: span 2;
  grid-row-end: span 4;
}

grass {
  grid-row-end: span 2;
}`,
      },
      {
        chapter: 3,
        level: 19,
        blocks: ["grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5%;
}

grass {
  grid-column-start: 2;
  grid-column-end: -1;
}`,
      },
      {
        chapter: 3,
        level: 20,
        blocks: ["rocky", "dunes", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 50px;
}

dunes {
  grid-column: 1 / 7;
  grid-row: 2 / 3;
}

grass {
  grid-column: span 3;
}

rocky {
  grid-column: span 3;
}`,
      },
      {
        chapter: 3,
        level: 21,
        blocks: ["rocky", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: [left] 15% 1fr 15% [right];
  grid-template-rows: [top] 15% 1fr 15% [bottom];
}

rocky {
  grid-column: 1 / right;
  grid-row: -2 / bottom;
}

dunes {
  grid-column: left / 2;
  grid-row: top / bottom;
}`,
      },
      {
        chapter: 3,
        level: 22,
        blocks: ["dunes", "rocky", "dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr repeat(5, [dunes] 50px) [dunes];
  column-gap: 5%;
}

dunes {
  grid-row-start: dunes 3;
  grid-row-end: dunes 6;
}`,
      },
      {
        chapter: 3,
        level: 23,
        blocks: ["dunes", "grass", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10vw;
}

grass {
  grid-column: 2;
  grid-row: span 2;
}

rocky {
  grid-row: 2;
  grid-column: 3;
}`,
      },
      {
        chapter: 3,
        level: 24,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 140px;
}

dunes {
  grid-row-start: 2;
  grid-column-start: 2;
}`,
      },
    ],
  },
  {
    chapter: 4,
    concepts: "item placement by grid area",
    conceptsCode: `grid-template-areas: X;
grid-area: X;`,
    levelData: [
      {
        chapter: 4,
        level: 3,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: [left] 190px 190px [right];
  grid-template-rows: [top] 1fr 1fr 1fr 1fr [bottom];
}

dunes {
  /* grid-row-start: top; */
  /* grid-column-start: left; */
  /* grid-row-end: bottom */
  /* grid-column-end: right */
  grid-area: top / left / bottom / right;
}`,
      },
      {
        chapter: 4,
        level: 4,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

dunes {
  grid-area: 2 / 2 / 4 / 4;
}`,
      },
      {
        chapter: 4,
        level: 5,
        blocks: ["dunes", "grass", "dunes", "dunes", "dunes", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 50px;
}

grass {
  grid-area: auto / auto / span 5 / span 2;
  /* grid-area: span 5 / span 2; */
}`,
      },
      {
        chapter: 4,
        level: 6,
        blocks: ["grass"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr [bottom-start] 1fr 1fr [bottom-end];
}

grass {
  grid-row: bottom;
}`,
      },
      {
        chapter: 4,
        level: 7,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr [side-start] 100px 100px 100px [side-end];
  grid-template-rows: 1fr [bottom-start] 100px 100px 100px [bottom-end];
}

dunes {
  grid-area: bottom / side;

  /* grid-row-start: bottom; */
  /* grid-column-start: side; */
  /* grid-row-end: bottom; */
  /* grid-column-end: side; */

  /* grid-row-start: bottom-start; */
  /* grid-column-start: side-start; */
  /* grid-row-end: bottom-end; */
  /* grid-column-end: side-end; */
}`,
      },
      {
        chapter: 4,
        level: 8,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 35% [center-start] 1fr 1fr [center-end] 35%;
  grid-template-rows: 35% [center-start] 1fr 1fr [center-end] 35%;
}

dunes {
  grid-area: center;
  /* grid-area: center / center; */
}`,
      },
      {
        chapter: 4,
        level: 9,
        blocks: ["dunes", "rocky", "grass"],
        css: `planet {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: [grass-start rocky-start] 1fr 1fr [grass-end rocky-end dunes-start] 1fr [dunes-end];
  grid-template-rows: [grass-start dunes-start] 1fr [grass-end rocky-start] 1fr [rocky-end dunes-end];
}

planet {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "grass grass dunes"
    "rocky rocky dunes";
}

rocky {
  grid-area: rocky;
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;
}`,
      },
      {
        chapter: 4,
        level: 10,
        blocks: ["dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". ...... ."
    ". center ."
    ". ...... .";
}

dunes {
  grid-area: center;
}`,
      },
      {
        chapter: 4,
        level: 11,
        blocks: ["rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left . . right";
}

rocky {
  grid-column-start: left-end;
  grid-column-end: right-start;
}`,
      },
      {
        chapter: 4,
        level: 13,
        blocks: ["grass", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 10%;
  grid-template-areas: 
    "..... ..... ....."
    "..... grass grass"
    "dunes grass grass"
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;  
}`,
      },
      {
        chapter: 4,
        level: 14,
        blocks: ["grass", "rocky", "rocky", "rocky", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: 1fr 200px 1fr;
  column-gap: 25px;
  row-gap: 25px;
}

grass {
  grid-area: 1 / 1 / 2 / 4;
}

dunes {
  grid-area: 3 / 1 / 4 / 4;
}`,
      },
      {
        chapter: 4,
        level: 15,
        blocks: ["grass", "rocky", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-areas:
    "rocky rocky . dunes dunes dunes dunes . grass"
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;
}

rocky {
  grid-area: rocky;
}`,
      },
      {
        chapter: 4,
        level: 16,
        blocks: ["grass", "dunes", "rocky"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10%;
  grid-template-areas:
    "grass grass dunes"
    "grass grass dunes"
    "rocky rocky rocky"
    "rocky rocky rocky";
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;
}

rocky {
  grid-area: rocky;
}`,
      },
      {
        chapter: 4,
        level: 17,
        blocks: ["rocky", "grass", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  grid-template-rows: 1fr;
  column-gap: 10%;
}

dunes {
  grid-area: 1 / 1 / 2 / 2;
}

grass { 
  grid-area: 1 / 2 / 2 / 3;
}`,
      },
      {
        chapter: 4,
        level: 18,
        blocks: ["rocky", "grass", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 5%;
  grid-template-areas:
   "grass grass grass grass"
   "..... ..... ..... ....."
   "..... dunes dunes dunes"
   "..... ..... ..... ....."
   "rocky rocky ..... .....";
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;
}

rocky {
  grid-area: rocky;
}`,
      },
      {
        chapter: 4,
        level: 19,
        blocks: ["grass", "dunes", "rocky", "water"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 80px 50px 80px 1fr;
  grid-template-rows: 1fr 80px 50px 80px 1fr;
}

grass {
  grid-area: 1 / 1 / 4 / 2;
}

dunes {
  grid-area: 5 / 1 / 6 / 4;
}

water {
  grid-area: 3 / 5 / 6 / 6;
}

rocky {
  grid-area: 1 / 3 / 2 / 6;
}

/* OR */

planet {
  display: grid;
  grid-template-columns: 1fr 80px 50px 80px 1fr;
  grid-template-rows: 1fr 80px 50px 80px 1fr;
  grid-template-areas:
   "grass ..... rocky rocky rocky"
   "grass ..... ..... ..... ....."
   "grass ..... ..... ..... water"
   "..... ..... ..... ..... water"
   "dunes dunes dunes ..... water";
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;
}

water {
  grid-area: water;
}

rocky {
  grid-area: rocky;
}`,
      },
      {
        chapter: 4,
        level: 20,
        blocks: ["dunes", "rocky", "water"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 1fr 100px;
  column-gap: 3vw;
  grid-template-areas:
    "dunes ..... water"
    "dunes rocky water"
    "..... rocky .....";
}

dunes {
  grid-area: dunes;
}

rocky {
  grid-area: rocky;      
}

water {
  grid-area: water;  
}`,
      },
      {
        chapter: 4,
        level: 21,
        blocks: [
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "dunes",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr [center-start] 50px 50px [center-end] 1fr;
  grid-template-rows: 1fr [center-start] 50px 50px [center-end] 1fr;
  
}

dunes {
  grid-area: center;
}`,
      },
      {
        chapter: 4,
        level: 22,
        blocks: [
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "grass",
          "rocky",
          "dunes",
        ],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

rocky {
  grid-area: 2 / 1 / 4 / 3;
}

dunes {
  grid-area: 2 / 3 / 4 / 5;
}`,
      },
      {
        chapter: 4,
        level: 23,
        blocks: ["rocky", "water", "grass"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  column-gap: 20%;
  row-gap: 5%;
  grid-template-areas:
    "..... rocky"
    "..... rocky"
    "water water"
    "water water"
    "grass ....."
    "grass .....";
}

grass {
  grid-area: grass;
}

rocky {
  grid-area: rocky;
}

water {
  grid-area: water;
}`,
      },
      {
        chapter: 4,
        level: 24,
        blocks: ["rocky", "rocky", "grass", "water", "dunes"],
        css: `planet {
  display: grid;
  grid-template-columns: 200px 100px 1fr 1fr;
  grid-template-rows: 1fr 200px;
  column-gap: 50px;
  grid-template-areas:
    "dunes dunes water grass"
    "rocky rocky water grass";
}

grass {
  grid-area: grass;
}

dunes {
  grid-area: dunes;
}

water {
  grid-area: water;
}`,
      },
    ],
  },
  {
    chapter: 5,
    concepts: "content in a grid, auto sizing, minmax(), auto-fill & auto-fit",
    conceptsCode: `grid-template-columns: auto 1fr;
grid-template-columns: min-content 1fr;
grid-template-columns: minmax(50px, auto);
grid-template-columns: repeat(auto-fill, 100px);
grid-template-columns: repeat(auto-fit, 200px);`,
    levelData: [
      {
        chapter: 5,
        level: 3,
        blocks: ["grass", "dunes", "rocky"],
        blocksContent: ["AAAA", "BB"],
        css: `planet {
  display: grid;
  grid-template-columns: auto auto 1fr;
}`,
      },
      {
        chapter: 5,
        level: 4,
        blocks: ["dunes", "rocky"],
        blocksContent: ["AA"],
        css: `planet {
  display: grid;
  grid-template-rows: auto 1fr;
}`,
      },
      {
        chapter: 5,
        level: 5,
        blocks: ["rocky"],
        blocksContent: ["AAA"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr minmax(50px, auto)
}

rocky {
  grid-column: 2;
}`,
      },
      {
        chapter: 5,
        level: 6,
        blocks: ["dunes"],
        blocksContent: ["AAA"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 2fr) 1fr;
}

dunes {
  grid-column:  2;
}`,
      },
      {
        chapter: 5,
        level: 7,
        blocks: ["water"],
        blocksContent: ["AAA AAA AAA AAA AAA AAA AAA AAA"],
        css: `planet {
  display: grid;
  grid-template-columns: minmax(auto, 2fr) minmax(auto, 1fr) 1fr;
  grid-template-rows: minmax(auto, 300px) auto 1fr;
  grid-column-gap: 5%;
}

water {
  grid-area: 2 / 2;
}`,
      },
      {
        chapter: 5,
        level: 8,
        blocks: ["water", "water", "water"],
        blocksContent: ["aAaA", "", "BBBB BBBB BBBB"],
        css: `planet {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr 1fr;
}`,
      },
      {
        chapter: 5,
        level: 9,
        blocks: ["dunes"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: 1fr;
}`,
      },
      {
        chapter: 5,
        level: 10,
        blocks: ["water", "grass", "dunes"],
        blocksContent: ["A", "B"],
        css: `/* AUTO-FIT and AUTO-FILL TAKE GAPS INTO ACCOUNT */

planet {
  display: grid;
  grid-template-columns: repeat(auto-fit, 10%);
  grid-template-rows: 1fr;
  column-gap: 20%
}`,
      },
      {
        chapter: 5,
        level: 12,
        blocks: ["grass", "dunes", "grass", "dunes", "grass", "dunes"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 150px;
  row-gap: 5%;
}`,
      },
      {
        chapter: 5,
        level: 13,
        blocks: ["rocky", "dunes", "dunes", "grass"],
        blocksContent: [],
        css: `/* with MINMAX SIZING takes PRIORTITY over FR */

planet {
  display: grid;
  grid-template-columns: minmax(50%, 1fr) repeat(3, 1fr);
  grid-template-rows: 1fr minmax(10%, 1fr);
}`,
      },
      {
        chapter: 5,
        level: 14,
        blocks: ["rocky", "water"],
        blocksContent: ["AAAAAAA", "BCB BCB BCB BCB BCB"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  column-gap: 100px;
  row-gap: 5%;
}

rocky {
  grid-area: 2 / 2;
}

water {
  grid-area: 2 / 3;
}`,
      },
      {
        chapter: 5,
        level: 15,
        blocks: ["rocky", "grass"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(auto-fill, 10vw);
  grid-template-rows: repeat(auto-fill, 25vh);
  column-gap: 10vw;
}`,
      },
      {
        chapter: 5,
        level: 16,
        blocks: ["water", "rocky", "dunes", "dunes", "dunes", "dunes"],
        blocksContent: ["CCCCC CCCC CCCCCC CCCC CCCCC CCCCC", "ABABABABABABAB"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(auto, 1fr) auto min-content;
  column-gap: 5%;
  row-gap: 5%;
}

rocky {
  grid-area: 3 / 1 / 4 / 3;
}

water {
  grid-area: 2 / 3 / 3 / 5;
}`,
      },
      {
        chapter: 5,
        level: 17,
        blocks: ["dunes", "rocky", "water", "water", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr minmax(50%, 1fr) 1fr;
  column-gap: 5vw;
  row-gap: 5vh;
}

dunes {
  /* grid-area: 1 / 1 / 2 / 4; */
  grid-column: 1 / 4;
}

rocky {
  /* grid-area: 3 / 1 / 4 / 4; */
  grid-column: 1 / 4;
  grid-row: 3;
}`,
      },
      {
        chapter: 5,
        level: 18,
        blocks: ["grass", "rocky", "dunes", "water", "water"],
        blocksContent: ["AAAAA AAAAA", "BBBBBB BBBBBB"],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content 1fr 100px;
  column-gap: 5%;
  row-gap: 10%;
}

dunes {
  grid-area: 2 / 1 / 3 / 3;
  /* grid-column: span 2; */
}`,
      },
      {
        chapter: 5,
        level: 19,
        blocks: ["water", "dunes", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(auto-fit, 25%);
  grid-template-rows: repeat(auto-fit, 25%);
}

dunes {
  grid-row: span 2;
}`,
      },
    ],
  },
  {
    chapter: 6,
    concepts: "grid-template, grid-auto-flow, sparse vs dense, order",
    conceptsCode: `grid-template: X (rows) / X (columns);
grid-auto-flow: row (default) / column sparse (default) / dense;
order: X;`,
    levelData: [
      {
        chapter: 6,
        level: 3,
        blocks: ["water", "dunes", "water", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template: 1fr 20% / 1fr 1fr 1fr 1fr;
  grid-column-gap: 10%;
}`,
      },
      {
        chapter: 6,
        level: 4,
        blocks: ["rocky", "water", "water", "water", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-gap: 5%;
  grid-template: 
    ". rocky rocky ." 200px 
    ". rocky rocky ." 1fr 
    / 1fr 1fr 1fr 1fr;
}

rocky {
  grid-area: rocky;
}`,
      },
      {
        chapter: 6,
        level: 5,
        blocks: ["water", "dunes", "water", "water", "water", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template: 
    1fr
    1fr
    / 1fr 1fr 1fr 1fr;
}

dunes {
  grid-column: 4;
}`,
      },
      {
        chapter: 6,
        level: 6,
        blocks: ["water", "rocky", "water", "water", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template: 
    1fr
    1fr
    1fr
    / 1fr 1fr 1fr;
  grid-gap: 50px;
}

rocky {
  grid-column: 1;
}`,
      },
      {
        chapter: 6,
        level: 7,
        blocks: [
          "water",
          "rocky",
          "water",
          "water",
          "water",
          "water",
          "rocky",
          "water",
          "water",
        ],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template:
    1fr
    100px
    100px
    1fr
    / 1fr 100px 100px 1fr;
}

rocky {
  grid-row: span 3;
}`,
      },
      {
        chapter: 6,
        level: 8,
        blocks: ["water", "dunes", "water", "water", "water", "water", "dunes"],
        blocksContent: [],
        css: `/* ROW POSITIONING gives the cell a FAST PASS in POSITIONING */
/* those cells are placed first */
/* and then the fill process starts from the beginning */
/* remember: grid-area IS row positioning */

planet {
  display: grid;
  grid-template:
    1fr
    100px
    100px
    1fr
    / 1fr 200px 1fr;
}

dunes {
  grid-area: 2;
}`,
      },
      {
        chapter: 6,
        level: 9,
        blocks: ["water", "water", "rocky", "water", "water", "dunes"],
        blocksContent: [],
        css: `/* row-positioned items are still given first place priority */
/* regardless of the order values */

planet {
  display: grid;
  grid-template: 
    1fr
    25%
    1fr
    / 1fr 25% 1fr; 
}

rocky {
  order: 1;
}

dunes {
  order: -1;
}`,
      },
      {
        chapter: 6,
        level: 10,
        blocks: [
          "water",
          "water",
          "water",
          "water",
          "dunes",
          "water",
          "water",
          "water",
          "water",
          "water",
        ],
        blocksContent: [],
        css: `/* fill up the grid with columns instead of rows (default) */
/* and then column placement has fast pass priority */

planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  grid-auto-flow: column;
}

dunes {
  /* grid-column: 1; */     
}`,
      },
      {
        chapter: 6,
        level: 11,
        blocks: [
          "water",
          "water",
          "dunes",
          "water",
          "water",
          "rocky",
          "water",
          "water",
        ],
        blocksContent: [],
        css: `/* if the grid goes back to previous empty cells or not */
/* grid-auto-flow: row (default) / column sparse (default) / dense */

planet {
  display: grid;
  grid-template: 100px
                 1fr
                 1fr
                 100px
                 / 100px 1fr 1fr 1fr 100px;
  grid-gap: 5%;
  grid-auto-flow: dense;
}

rocky {
  grid-row: span 3;
  grid-column: 4;
}

dunes {
  grid-row: span 3;
  grid-column: 2;
}`,
      },
      {
        chapter: 6,
        level: 13,
        blocks: ["dunes", "rocky", "water", "rocky", "water"],
        blocksContent: ["ABcccccBA"],
        css: `planet {
  display: grid;
  grid-template-columns: minmax(25%, 1fr) 1fr;
  grid-template-rows: auto repeat(3, 1fr);
  column-gap: 10%;
  row-gap: 50px;
  grid-auto-flow: dense;
}

dunes {
  grid-column-start: 2;
}

rocky {
  grid-row: span 2;
}`,
      },
      {
        chapter: 6,
        level: 14,
        blocks: ["rocky", "water", "water", "dunes", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template:
    1fr
    minmax(25vh, 1fr)
    100px
    / 1fr 10%;
}

dunes {
  grid-column: 2;
}

rocky {
  order: 1;
}`,
      },
      {
        chapter: 6,
        level: 15,
        blocks: [
          "water",
          "rocky",
          "water",
          "rocky",
          "water",
          "water",
          "water",
          "water",
        ],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: 1fr 100px 1fr 100px 1fr;
  gap: 25px;
  grid-auto-flow: column dense;
}

rocky {
  grid-row: span 2;
  grid-column: span 2;
}`,
      },
      {
        chapter: 6,
        level: 16,
        blocks: ["water", "water", "dunes", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  grid-auto-flow: dense;
}

water {
  grid-column: span 2;
}`,
      },
      {
        chapter: 6,
        level: 17,
        blocks: [
          "water",
          "water",
          "dunes",
          "water",
          "water",
          "rocky",
          "water",
          "water",
          "water",
          "water",
          "water",
        ],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 30% 20% 20% 30%;
  grid-auto-flow: column;
}

dunes {
  grid-column: span 4;
}`,
      },
      {
        chapter: 6,
        level: 18,
        blocks: ["water", "rocky", "dunes", "water", "water", "water", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-gap: 50px;
  grid-template:
    ". rocky rocky ." 1fr
    ". . dunes ." 1fr
    ". . dunes ." 1fr
    ". . dunes ." 1fr
    / 1fr 1fr 1fr 1fr;
}

rocky {
  grid-area: rocky;
}

water {
  grid-row: span 2;
}

dunes {
  grid-area: dunes;
}`,
      },
      {
        chapter: 6,
        level: 19,
        blocks: ["dunes", "rocky", "grass", "water"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 100px;
}

grass {
  order: 1;
}

water {
  order: 4;
}

dunes {
  order: 2;
}

rocky {
  order: 3;
}`,
      },
      {
        chapter: 6,
        level: 20,
        blocks: [
          "rocky",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
          "water",
        ],
        blocksContent: ["ABABAB AB ABABAB"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr minmax(50px, auto) 100px;
  grid-template-rows: repeat(4, 1fr);
}

rocky {
  grid-row: 2 / 4;
  grid-column: 2;
}`,
      },
    ],
  },
  {
    chapter: 7,
    concepts: "implicit tracks, grid-auto-columns, grid-auto-rows",
    conceptsCode: `grid-auto-columns: X;
grid-auto-rows: X;`,
    levelData: [
      {
        chapter: 7,
        level: 3,
        blocks: ["rocky"],
        blocksContent: [],
        css: `/* the grid will implicitly make extra tracks */

planet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

rocky {
  grid-column: 3;
  grid-row: 3;
}`,
      },
      {
        chapter: 7,
        level: 4,
        blocks: ["water", "water", "water", "water", "dunes", "dunes"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10vh;
  row-gap: 10vw;
}`,
      },
      {
        chapter: 7,
        level: 5,
        blocks: ["water", "water", "dunes"],
        blocksContent: ["", "", "AAAA"],
        css: `/* implicit tracks are auto size by default */

planet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

dunes {
  grid-column: 3;
}`,
      },
      {
        chapter: 7,
        level: 6,
        blocks: ["rocky"],
        blocksContent: [],
        css: `/* grid-auto-columns specifies the width of auto created columns */

planet {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 100px;
}

rocky {
  grid-column-end: 7;
}`,
      },
      {
        chapter: 7,
        level: 7,
        blocks: [
          "water",
          "water",
          "water",
          "dunes",
          "rocky",
          "grass",
          "dunes",
          "water",
        ],
        blocksContent: [],
        css: `/* grid-auto-rows specifies the height of auto created rows */

planet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  grid-auto-rows: 1fr;
}`,
      },
      {
        chapter: 7,
        level: 9,
        blocks: ["dunes", "grass", "grass", "rocky"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 50px;
  grid-auto-rows: 50%;
}`,
      },
      {
        chapter: 7,
        level: 10,
        blocks: ["dunes", "grass"],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
}

grass {
  grid-column: 3;
  grid-row: 4;
}`,
      },
      {
        chapter: 7,
        level: 11,
        blocks: [
          "rocky",
          "dunes",
          "grass",
          "grass",
          "grass",
          "dunes",
          "dunes",
          "dunes",
          "dunes",
          "rocky",
        ],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 100px;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
}

rocky {
  grid-column: 6;
}`,
      },
      {
        chapter: 7,
        level: 12,
        blocks: ["water", "water", "rocky", "dunes"],
        blocksContent: ["", "", "ABC", "ABC"],
        css: `planet {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-auto-columns: minmax(50px, auto);
  column-gap: 10%;
  row-gap: 40px;
}

dunes {
  grid-column: 3;
}`,
      },
      {
        chapter: 7,
        level: 13,
        blocks: ["dunes", "grass"],
        blocksContent: [],
        css: `/* tracks created by repeat() are explicit */
/* so grid-auto-columns / grid-auto-rows doesn't do anything */
/* auto-fill / auto-fit create explicit tracks */
/* grid-auto-columns / grid-auto-rows control implicit track size */

planet {
  display: grid;
  grid-row-gap: 5%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, 100px);
}`,
      },
      {
        chapter: 7,
        level: 14,
        blocks: [
          "water",
          "water",
          "water",
          "water",
          "water",
          "rocky",
          "water",
          "water",
        ],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-columns: 0.5fr;
  grid-auto-flow: row dense;
  column-gap: 50px;
  row-gap: 50px;
}

rocky {
  grid-column: span 6;
}`,
      },
      {
        chapter: 7,
        level: 15,
        blocks: [
          "dunes",
          "dunes",
          "dunes",
          "dunes",
          "dunes",
          "dunes",
          "dunes",
          "dunes",
        ],
        blocksContent: [],
        css: `planet {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: repeat(4, 50px);
  grid-auto-rows: 50px;
  column-gap: 5%;
  row-gap: 25px;
}

dunes {
  grid-row: span 2;
}`,
      },
    ],
  },
];

export default chapterData;
