import { useRef } from "react";
import { BryntumGantt, BryntumProjectModel } from "@bryntum/gantt-react";
import "../App.scss";
import ganttConfig from "../MissionGanttConfig";
import { projectConfig } from "./ProjectConfig";

function MissionGant(props) {
  const project = useRef();
  return (
    <>
      <BryntumProjectModel {...projectConfig} ref={project} />
      <BryntumGantt {...ganttConfig} project={project} />
    </>
  );
}

export default MissionGant;
