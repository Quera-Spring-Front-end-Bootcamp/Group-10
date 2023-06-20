import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type TaskUnassignTaskFromUserResponseBody = ResponseBody<null>


export function UnassignTaskFromUser() {
    async function unassignTaskFromUser(
      incomingData: TaskUnassignTaskFromUserResponseBody
    ): Promise<TaskUnassignTaskFromUserResponseBody> {
      const { data } = await AXIOS.delete("/task/:taskId/assign/:usernameOrId", incomingData);
      return data;
  }
  
    return useMutation((data: TaskUnassignTaskFromUserResponseBody) => unassignTaskFromUser(data));
}