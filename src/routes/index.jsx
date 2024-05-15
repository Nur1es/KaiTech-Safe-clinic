import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import Doctors from "../pages/Doctors";
import Filial from "../pages/Filial";
import SignIn from "../Components/form/AuthSignIn";
import Service from "../pages/Service";
import Patient from '../pages/PatientList'
export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <SignIn />,
  },
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      {
        path: "analytics",
        element: <></>,
      },
      {
        path: "usluga",
        element: <Service />,
      },
      {
        path: "list-doctors",
        element: <Doctors />,
      },
      {
        path: "list-pasient",
        element: <Patient />,
      },
      {
        path: "branch",
        element: <Filial />,
        children: [
          {
            path: ":id",
          },
        ],
      },
      {
        path: "notification",
        element: <></>,
      },
      {
        path: "setting",
        // element: <Setting/>,
      },
    ],
  },
]);
