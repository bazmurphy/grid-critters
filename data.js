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
      blocks: [],
      css: ``,
    },
  ],
];

export default data;
