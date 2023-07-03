import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProjectListView from "./ProjectListView";
import ProjectColumnView from "./ProjectColumnView";
import ProjectCalendarView from "./ProjectCalendarView";

function Project() {
  const [id, setId] = useState("");
  const [boardType, setBoardType] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const pathSeparate = pathname.split("/");
    const id = pathSeparate[2];
    const boardType = pathSeparate[3];
    setBoardType(boardType);
    setId(id);
  }, [pathname]);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      {boardType === "list" && <ProjectListView />}
      {boardType === "column" && <ProjectColumnView />}
      {boardType === "calendar" && <ProjectCalendarView />}
    </div>
  );
}

export default Project;
