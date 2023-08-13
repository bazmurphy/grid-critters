const data = [
  [
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
  [
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
  [
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
];

export default data;
