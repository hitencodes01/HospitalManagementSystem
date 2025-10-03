import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./components/admin/Admin.jsx";
import User from "./components/user/User.jsx";
import RegisterAdmin from "./components/admin/RegisterAdmin.jsx";
import LogInAdmin from "./components/admin/LogInAdmin.jsx";
import LogInUser from './components/user/LogInUser.jsx'
import RegisterUser from './components/user/RegisterUser.jsx'
import UserDashboard from "./components/user/UserDashboard.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AddAppointment from "./components/user/AddAppointment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/admin/register",
    element: <RegisterAdmin />,
  },
  {
    path: "/admin/login",
    element: <LogInAdmin />,
  },
  {
    path : "admin/dashboard",
    element : <AdminDashboard/>
  },
  {
    path: "/user/register",
    element: <RegisterUser />,
  },
  {
    path: "/user/login",
    element: <LogInUser />,
  },
  {
    path : "/user/dashboard",
    element : <UserDashboard/>
  },
  {
    path : '/user/dashboard/new-appointment',
    element : <AddAppointment/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
