import { useRef, useEffect } from "react";
import { BryntumGantt, BryntumProjectModel } from "@bryntum/gantt-react";
import "../App.scss";

import missionTasks from "./gantt-mars-data.js";

function MissionGant(props) {
  const ganttRef = useRef();
  const projectRef = useRef();
  const { tasks, dependencies } = missionTasks;
  useEffect(() => {
    const { project } = ganttRef.current.instance;
    project.stm.enable();
  }, []);
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
