import { renderRoutes } from "./generate-routes";

// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordConfirm from "../pages/ForgetPasswordConfirm";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type RouteType = {
  name: string;
  title: string;
  component: () => JSX.Element;
  path: string;
  isPublic?: boolean;
};

export type LayoutType = {
  layout: () => JSX.Element;
  routes: RouteType[];
};

export const routes: LayoutType[] = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        component: Register,
        path: "/register",
        isPublic: true,
      },
      {
        name: "forgetPassword",
        title: "ForgetPassword page",
        component: ForgetPassword,
        path: "/forget-password",
        isPublic: true,
      },
      {
        name: "forgetPasswordConfirm",
        title: "ForgetPasswordConfirm page",
        component: ForgetPasswordConfirm,
        path: "/forget-password-confirm",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [],
  },
];

export const Routes = renderRoutes(routes);
