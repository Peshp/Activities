import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";

export const routes: RouteObject = {
    path: "/",
    element: <App />
};

export const router = createBrowserRouter;