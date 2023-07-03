import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectListView from "./ProjectListView";
import ProjectColumnView from "./ProjectColumnView";
import ProjectCalendarView from "./ProjectCalendarView";
import { ProjectGetProjectById } from "../api/Project/GetProjectById";
import { setProject } from "../redux/slices/projectSlice";
import store from "../redux/store";

function Project() {
  const [id, setId] = useState("");
  const [boardType, setBoardType] = useState("");
  const { pathname } = useLocation();
  const { data, refetch } = ProjectGetProjectById(id);
  // const project = useSelector((state: RootState) => state.project);

  useEffect(() => {
    const pathSeparate = pathname.split("/");
    const id = pathSeparate[2];
    const boardType = pathSeparate[3];
    setBoardType(boardType);
    setId(id);
  }, [pathname]);

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  useEffect(() => {
    if (data?.data) {
      store.dispatch(setProject(data.data));
    }
  }, [data]);

  return (
    <div>
      {boardType === "list" && <ProjectListView />}
      {boardType === "column" && <ProjectColumnView />}
      {boardType === "calendar" && <ProjectCalendarView />}
    </div>
  );
}

export default Project;
