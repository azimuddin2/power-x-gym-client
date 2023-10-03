import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import Classes from "../pages/Classes/Classes/Classes";
import ClassesDetails from "../pages/Classes/ClassesDetails/ClassesDetails";
import Purchase from "../pages/Purchase/Purchase";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                    return fetch(`http://localhost:5000/classes/${params.id}`)
                }
            },
            {
                path: 'pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/purchase/:id',
                element: <Purchase></Purchase>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/purchase/${params.id}`)
                }
            },
        ],
    },
]);

export default router;