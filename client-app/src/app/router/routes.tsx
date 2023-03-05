import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomeComp from "../../features/home/homecomp";
import LoginForm from "../../features/login";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomeComp />},
            {path: 'login', element: <LoginForm />}
            
        ]
    }
]


export const router = createBrowserRouter(routes);