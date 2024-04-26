import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../features/home/Home";
import ActivityDashboard from "../../features/features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/features/activities/form/ActivityForm";
import ActivityDetails from "../../features/features/activities/details/ActivityDetails";

const routes: RouteObject[] = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/activities",
          element: <ActivityDashboard />
        },
        {
          path: "/createActivity",
          element: <ActivityForm key='create' />
        },
        {
            path: "/activities/:id",
            element: <ActivityDetails />
        },
        {
          path: "/manage/:id",
          element: <ActivityForm key='manage'/>
        }
      ]
    }
  ];

export const router = createBrowserRouter(routes);