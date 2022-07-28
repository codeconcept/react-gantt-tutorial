import MissionGantt from "./components/MissionGantt";
import config from "./MissionGanttConfig";
function App() {
  return <MissionGantt {...config} />;
}

// If you plan to use stateful React collections for data binding please check this guide
// https://www.bryntum.com/docs/gantt/guide/Gantt/integration/react/data-binding

export default App;
