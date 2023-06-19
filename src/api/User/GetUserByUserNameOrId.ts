import { useQuery } from "@tanstack/react-query";
import { ResponseBody } from "../Types"
import AXIOS from "../../utils/axios";


type UserGetUserByUserNameOrIdResponse = ResponseBody<{
    "_id": string,
    "username": string,
    "firstname": string,
    "lastname": string,
    "email": string,
    "profile_url": string,
    "phone": string,
    "workspaces": string[],
    "workspaceMember": [],
    "taskAssignees": [],
    "comments": [],
    "projectMember": string[]
}>


export function GetUserByUserNameOrId() {
    async function getUserByUserNameOrId(): Promise<UserGetUserByUserNameOrIdResponse> {
      const { data } = await AXIOS.get("/users/:usernameOrId");
      return data;
    }
    return useQuery(["getUserByUserNameOrId"], getUserByUserNameOrId);
  }