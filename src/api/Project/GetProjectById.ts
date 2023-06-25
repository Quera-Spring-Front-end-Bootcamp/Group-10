import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectGetProjectByIdResponseBody = ResponseBody<{
    _id: string,
    name: string,
    workspace: string,
    members: [
        {
            user: {
                _id: string,
                username: string,
                firstname: string,
                lastname: string,
                email: string,
                profile_url: string
            },
            role: string
        }
    ],
    boards: []
}>


export function ProjectGetProjectById(id:string) {
    async function projectGetProjectById(
      incomingData: ProjectGetProjectByIdResponseBody
    ): Promise<ProjectGetProjectByIdResponseBody> {
      const { data } = await AXIOS.put(`/projects/:${id}`, incomingData);
      return data;
  }
  
    return useMutation((data: ProjectGetProjectByIdResponseBody) => projectGetProjectById(data));
}