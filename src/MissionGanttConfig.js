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
};

export default ganttConfig;
