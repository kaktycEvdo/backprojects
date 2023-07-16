import React from 'react'
import ReactDOM from 'react-dom/client'
import Favlinks from './pages/Favlinks.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Index1 from "./pages/lagushki/Index.jsx"
import Info from "./pages/lagushki/Info.jsx";
import Index2 from "./pages/lagushki/Index2.jsx";
import FAQ from "./pages/lagushki/FAQ.jsx";
import Rating from "./pages/lagushki/Rating.jsx";
import Build from "./pages/lagushki/Build.jsx";
import Lagushki from "./pages/Lagushki.jsx";


const router = createBrowserRouter([
    {
        path: "favlinks",
        element: <Favlinks/>
    },
    {
        path: "/",
        element: <Index/>
    },
    {
        path: "lagushki",
        element: <Lagushki/>,
        children:[
            {
                path: "",
                element: <Index1/>
            },
            {
                path: "info",
                element: <Info/>
            },
            {
                path: "index2",
                element: <Index2/>
            },
            {
                path: "faq",
                element: <FAQ/>
            },
            {
                path: "rating",
                element: <Rating/>
            },
            {
                path: "build",
                element: <Build/>
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
