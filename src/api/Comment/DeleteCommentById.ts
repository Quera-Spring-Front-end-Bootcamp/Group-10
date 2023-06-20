import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type CommentDeleteCommentByIdResponseBody = ResponseBody<null>


export function DeleteCommentById() {
    async function deleteCommentById(
      incomingData: CommentDeleteCommentByIdResponseBody
    ): Promise<CommentDeleteCommentByIdResponseBody> {
      const { data } = await AXIOS.delete("/comments/:id", incomingData);
      return data;
  }
  
    return useMutation((data: CommentDeleteCommentByIdResponseBody) => deleteCommentById(data));
}