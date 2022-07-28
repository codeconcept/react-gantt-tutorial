const tasks = [
  {
    id: 1,
    name: "Go to Mars",
    iconCls: "b-fa b-fa-space-shuttle",
    expanded: true,
    startDate: "2030-01-01",
    children: [
      {
        id: 2,
        name: "Astronaut academy",
        percentDone: 85,
        duration: 10,
        iconCls: "b-fa b-fa-user-graduate",
      },
      {
        id: 3,
        name: "Buy space suit",
        percentDone: 50,
        duration: 2,
        iconCls: "b-fa b-fa-user-astronaut",
      },
      {
        id: 4,
        name: "Wait for Elon´s call",
        duration: 1,
        iconCls: "b-fa b-fa-phone",
      },
    ],
  },
];

const dependencies = [
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

// We create this data instead of direcly export the object to please the linter
const data = { tasks, dependencies };
export default data;
