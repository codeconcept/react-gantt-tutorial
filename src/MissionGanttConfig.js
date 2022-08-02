import "./components/GanttToolbar";

const ganttConfig = {
  columns: [
    { type: "wbs" },
    { type: "name", width: 250 },
    { type: "startdate" },
    { type: "duration" },
  ],
  tbar: {
    type: "gantttoolbar",
  },
  // to add filtering option on every column grid header
  filterFeature: true,
  taskMenuFeature: {
    items: {
      moveForward: {
        text: "Move 1 day ahead",
        weight: 80,
        onItem: ({ taskRecord }) => {
          taskRecord.shift(1, "day");
        },
      },
      moveBackward: {
        text: "Move 1 day before",
        weight: 90,
        onItem: ({ taskRecord }) => {
          taskRecord.shift(-1, "day");
        },
      },
      // Rename "Delete task" item
      deleteTask: {
        text: "Delete this task",
      },
      // Rename "Edit task" item
      editTask: {
        text: "Update this task",
      },
      add: {
        menu: {
          // Only added to the left grid as it's a filter
          filterDateEquales: true,
        },
      },
    },
  },
  taskEditFeature: {
    items: {
      dangerZone: {
        title: "Danger Zone",
        weight: 90,
        items: {
          dangerName: {
            type: "textfield",
            weight: 100,
            label: "Danger Name",
            // could be any task field like name, id, duration, percentDone
            name: "name",
          },
          dangerProbability: {
            type: "radiogroup",
            name: "probability",
            label: "Probability",
            options: {
              hight: "High",
              medium: "Medium",
              mow: "Low",
            },
          },
        },
      },
    },
  },

  taskRenderer({ taskRecord, renderData }) {
    // console.log("taskRenderer", { taskRecord, renderData });
    // console.log("taskRecord.name", taskRecord.name);
    if (taskRecord.name.toLocaleLowerCase().startsWith("important ")) {
      // make important task red
      renderData.style = "background-color: red; color: pink";
      // display the name in the task only if the task important
      return taskRecord.name.split("important ")[1];
    }
  },
};

export default ganttConfig;
