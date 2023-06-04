import { useQuery } from "@tanstack/react-query";
import { ResponseBody } from "./Types";
import AXIOS from "../utils/axios";

type WorkspaceGetAllResponse = ResponseBody<
  {
    _id: string;
    name: string;
    user: string;
    members: [];
    projects: {
      _id: string;
      name: string;
      members: string[];
      boards: [];
    }[];
  }[]
>;

export function WorkspaceGetAll() {
  async function workspaceGetAll(): Promise<WorkspaceGetAllResponse> {
    const { data } = await AXIOS.get("/workspace/get-all");
    return data;
  }
  return useQuery(["WorkspaceGetAll"], workspaceGetAll);
}
