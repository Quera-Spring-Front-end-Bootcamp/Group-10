import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectAddMemberToProjectResponseBody = ResponseBody<{
    projectId: string,
    userId: string
}>


export function ProjectAddMemberToProject(projectId:string,userId:string) {
    async function projectAddMemberToProject(
      incomingData: ProjectAddMemberToProjectResponseBody
    ): Promise<ProjectAddMemberToProjectResponseBody> {
      const { data } = await AXIOS.put(`/projects/:${projectId}/members/:${userId}`, incomingData);
      return data;
  }
  
    return useMutation((data: ProjectAddMemberToProjectResponseBody) => projectAddMemberToProject(data));
}