import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectRemoveMemberFromProjectResponseBody = ResponseBody<{
    projectId: string,
    username: string,
    userId: string
}>


export function ProjectRemoveMemberFromProject(projectId:string,usernameOrId:string) {
    async function projectRemoveMemberFromProject(
      incomingData: ProjectRemoveMemberFromProjectResponseBody
    ): Promise<ProjectRemoveMemberFromProjectResponseBody> {
      const { data } = await AXIOS.delete(`/projects/:${projectId}/members/:${usernameOrId}`, incomingData);
      return data;
  }
  
    return useMutation((data: ProjectRemoveMemberFromProjectResponseBody) => projectRemoveMemberFromProject(data));
}