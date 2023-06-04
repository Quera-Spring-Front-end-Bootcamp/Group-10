import AXIOS from "../utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ResponseBody } from "./Types";

/* -------------------------------------------------------------------------- */
/*                                  Register                                  */
/* -------------------------------------------------------------------------- */
type AuthRegisterRequestBody = {
  username: string;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  profile_url?: string;
  phone?: string;
};

type AuthRegisterResponse = ResponseBody<{
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  profile_url: string;
  phone: string;
  workspaces: [];
  workspaceMember: [];
  taskAssignees: [];
  comments: [];
  settings: [];
  projectMember: [];
  _id: string;
}>;

export function AuthRegister() {
  async function authRegister(
    incomingData: AuthRegisterRequestBody
  ): Promise<AuthRegisterResponse> {
    const { data } = await AXIOS.post("/auth/register", incomingData);
    return data;
  }

  return useMutation((data: AuthRegisterRequestBody) => authRegister(data));
}

/* -------------------------------------------------------------------------- */
/*                                    Login                                   */
/* -------------------------------------------------------------------------- */

type AuthLoginRequestBody = {
  emailOrUsername: string;
  password: string;
};
type AuthLoginResponse = ResponseBody<{
  accessToken: string;
  refreshToken: string;
  toBeSendUserData: {
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    profile_url: string;
    phone: string;
    settings: [];
  };
}>;
export function AuthLogin() {
  async function authRegister(
    incomingData: AuthLoginRequestBody
  ): Promise<AuthLoginResponse> {
    const { data } = await AXIOS.post("/auth/login", incomingData);
    return data;
  }

  return useMutation((data: AuthLoginRequestBody) => authRegister(data));
}
