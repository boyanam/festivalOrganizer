import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage";
import AdminPage from "./pages/AdminPage";
import OrganizersPage from "./pages/OrganizersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { path: "admin", element: <AdminPage /> },
      { path: "", element: <OrganizersPage /> },
      //dodaj login ovde i kao stranicu
    ],
  },
]);
