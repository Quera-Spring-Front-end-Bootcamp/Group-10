import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectGetProjectByWorkspaceIdResponse = ResponseBody<[
    {
        "_id": string,
        "name": string,
        "workspace": string,
        "members": [],
        "boards": []
    },
    {
        "_id": string,
        "name": string,
        "workspace": string,
        "members": [],
        "boards": [
            {
                "board": string,
                "position": number,
                "_id": string
            }
        ]
    },
    {
        "_id": string,
        "name": string,
        "workspace": string,
        "members": [
            {
                "user": {
                    "_id": string,
                    "username": string,
                    "firstname": string,
                    "lastname": string,
                    "email": string,
                    "profile_url": string
                },
                "role": string
            }
        ],
        "boards": []
    }
]>


export function GetProjectByWorkspaceId() {
    async function getProjectByWorkspaceId(): Promise<ProjectGetProjectByWorkspaceIdResponse> {
      const { data } = await AXIOS.get("/projects/workspaces/:id");
      return data;
    }
    return useQuery(["GetProjectByWorkspaceId"], getProjectByWorkspaceId);
}