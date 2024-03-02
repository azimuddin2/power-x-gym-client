import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import Classes from "../pages/Classes/Classes/Classes";
import ClassesDetails from "../pages/Classes/ClassesDetails/ClassesDetails";
import Purchase from "../pages/Purchase/Purchase";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: '/classes/:id',
                element: <ClassesDetails></ClassesDetails>,
                loader: ({ params }) => {
                    return fetch(`https://power-x-gym-server.vercel.app/classes/${params.id}`)
                }
            },
            {
                path: 'pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://power-x-gym-server.vercel.app/purchase/${params.id}`)
                }
            },
        ],
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
]);

export default router;