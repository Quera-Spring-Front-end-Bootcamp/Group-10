// import AXIOS from "../../utils/axios";
// import { useMutation } from "@tanstack/react-query";
// import { ResponseBody } from "../Types";

// /* -------------------------------------------------------------------------- */
// /*                                  deleteTask                                */
// /* -------------------------------------------------------------------------- */

// type taskDeleteTaskRequestBody = {
//     name: string;
//     description: string;
//     boardId: string;
// };
  
// type taskDeleteTaskResponseBody = ResponseBody<{
//     name: string;
//     description: string;
//     label: [];
//     board: string;
//     taskTags: [];
//     taskAssigns: [];
//     comments: [];
//     position: number;
//     _id: string;
// }>;
  
// export function TaskDeleteTask() {
//     async function taskDeleteTask(
//       incomingData: taskDeleteTaskRequestBody
//     ): Promise<taskDeleteTaskResponseBody> {
//       const { data } = await AXIOS.delete("/task/:id", incomingData);
//       return data;
//   }
  
//     return useMutation((data: taskDeleteTaskRequestBody) => taskDeleteTask(data));
// }