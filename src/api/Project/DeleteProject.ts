import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectDeleteProjectResponseBody = ResponseBody<{
    _id: string,
    name: string,
    workspace: string,
    members: string[],
    boards: [],
    __v: number
}>


export function DeleteProject() {
    async function deleteProject(
      incomingData: ProjectDeleteProjectResponseBody
    ): Promise<ProjectDeleteProjectResponseBody> {
      const { data } = await AXIOS.delete("/project/deleteproject/:id", incomingData);
      return data;
  }
  
    return useMutation((data: ProjectDeleteProjectResponseBody) => deleteProject(data));
}

