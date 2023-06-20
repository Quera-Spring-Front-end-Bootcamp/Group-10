import AXIOS from "../../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";

/* -------------------------------------------------------------------------- */
/*                                  deleteTask                                */
/* -------------------------------------------------------------------------- */


  
type TaskDeleteTaskResponseBody = ResponseBody<{
    name: string;
    description: string;
    label: [];
    board: string;
    taskTags: [];
    taskAssigns: [];
    comments: [];
    position: number;
    _id: string;
}>;
  
export function TaskDeleteTask() {
    async function taskDeleteTask(
      incomingData: TaskDeleteTaskResponseBody
    ): Promise<TaskDeleteTaskResponseBody> {
      const { data } = await AXIOS.delete("/task/:id", incomingData);
      return data;
  }
  
    return useMutation((data: TaskDeleteTaskResponseBody) => taskDeleteTask(data));
}