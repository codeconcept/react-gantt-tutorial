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
  features: {
    filter: true,
  },
  taskRenderer({ taskRecord, renderData }) {
    console.log("taskRenderer", { taskRecord, renderData });
    console.log("taskRecord.name", taskRecord.name);
    if (taskRecord.name.toLocaleLowerCase().startsWith("important")) {
      // make important task red
      renderData.style = "background-color: red; color: pink";
    }
  },
};

export default ganttConfig;
