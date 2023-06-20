import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectAddMemberToProjectResponseBody = ResponseBody<{
    projectId: string,
    userId: string
}>


export function AddMemberToProject() {
    async function addMemberToProject(
      incomingData: ProjectAddMemberToProjectResponseBody
    ): Promise<ProjectAddMemberToProjectResponseBody> {
      const { data } = await AXIOS.put("/projects/:projectId/members/:usernameOrId", incomingData);
      return data;
  }
  
    return useMutation((data: ProjectAddMemberToProjectResponseBody) => addMemberToProject(data));
}