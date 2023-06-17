import AXIOS from "../../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";

/* -------------------------------------------------------------------------- */
/*                                  createTask                                */
/* -------------------------------------------------------------------------- */

type taskCreateTaskRequestBody = {
  name: string;
  description: string;
  boardId: string;
};

type taskCreateTaskResponseBody = ResponseBody<{
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

export function TaskCreateTask() {
  async function taskCreateTask(
    incomingData: taskCreateTaskRequestBody
  ): Promise<taskCreateTaskResponseBody> {
    const { data } = await AXIOS.post("/task/", incomingData);
    return data;
  }

  return useMutation((data: taskCreateTaskRequestBody) => taskCreateTask(data));
}


