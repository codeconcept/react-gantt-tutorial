import { useRef } from "react";
import { BryntumGantt, BryntumProjectModel } from "@bryntum/gantt-react";
import "../styles/MissionGantt.css";

import missionTasks from "./gantt-mars-data.js";

function MissionGant(props) {
  const ganttRef = useRef();
  const projectRef = useRef();
  const { tasks, dependencies } = missionTasks;
  return (
    <>
      <BryntumProjectModel
        tasks={tasks}
        dependencies={dependencies}
        ref={projectRef}
      />
      <BryntumGantt {...props} ref={ganttRef} project={projectRef} />
    </>
  );
}

export default MissionGant;
