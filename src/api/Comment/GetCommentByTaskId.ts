import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type CommentGetCommentByTaskIdResponse = ResponseBody<
    {
        "_id": string,
        "text": string,
        "user": {
            "_id": string,
            "username": string
        },
        "createdAt": string
    }[]
> 

export function GetCommentByTaskId(){
    async function getCommentByTaskId(): Promise<CommentGetCommentByTaskIdResponse> {
        const { data } = await AXIOS.get("/comments/task/:taskId");
        return data;
      }
      return useQuery(["GetCommentByTaskId"], getCommentByTaskId);
}