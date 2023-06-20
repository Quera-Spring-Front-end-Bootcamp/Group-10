import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type TaskChangeTaskPositionResponseBody = ResponseBody<null>


export function ChangeTaskPosition() {
    async function changeTaskPosition(
      incomingData: TaskChangeTaskPositionResponseBody
    ): Promise<TaskChangeTaskPositionResponseBody> {
      const { data } = await AXIOS.put("/task/:id/position/:index", incomingData);
      return data;
  }
  
    return useMutation((data: TaskChangeTaskPositionResponseBody) => changeTaskPosition(data));
}