import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomeComp from "../../features/home/homecomp";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomeComp />},
        ]
    }
]


export const router = createBrowserRouter(routes);