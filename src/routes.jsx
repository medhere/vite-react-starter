import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import { AppSockets } from "./components/AppSockets";

const routes = createBrowserRouter([
    {
        path: "/", element: <>Home</>, children: [
            {
                path: 'auth', element: <AuthOutlet fallbackPath='/login' />, children: [
                    
                ]
            },
            
        ],
    },
    { path: 'socket', element: <AppSockets /> },
    {
        path: "*", element: <>No Route Found</>
    },

]);

export const AppRoutes = () => {
    return <RouterProvider router={routes} />
}
