import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { RouterProvider, createBrowserRouter, } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/", element: <>Home</>, children: [
            {
                path: 'auth', element: <AuthOutlet fallbackPath='/login' />, children: [

                ]
            },

        ],
    },
    {
        path: "*", element: <>No Route Found</>
    },

]);

export const AppRoutes = () => {
    return <RouterProvider router={routes} />
}
