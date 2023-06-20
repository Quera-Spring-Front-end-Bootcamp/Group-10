import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";

type CommentCreateNewCommentRequestBody = {
    text: string,
    taskId: string
}

export function CreateNewTask() {
    async function createNewTask(
      incomingData: CommentCreateNewCommentRequestBody
    ) {
      const { data } = await AXIOS.post("/comments/", incomingData);
      return data;
    }
  
    return useMutation((data: CommentCreateNewCommentRequestBody) => createNewTask(data));
  }