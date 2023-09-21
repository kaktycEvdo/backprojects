import React from 'react';
import ReactDOM from 'react-dom/client';
import Favlinks from './pages/Favlinks.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Index1 from "./pages/lagushki/Index.jsx";
import Index3 from "./pages/indexdrive/Index.jsx";
import Info from "./pages/lagushki/Info.jsx";
import Index2 from "./pages/lagushki/Index2.jsx";
import FAQ from "./pages/lagushki/FAQ.jsx";
import Rating from "./pages/lagushki/Rating.jsx";
import Build from "./pages/lagushki/Build.jsx";
import Lagushki from "./pages/Lagushki.jsx";
import IndexDrive, {getCars as carsLoader,
    getActiveUser as userLoader,
    actionUser as userAction,
    getBasket as basketLoader,
    actionBasket as basketAction,
    getActiveCard as activeCardLoader,
    getCards as CardsLoader,
    actionCards as cardsAction,
    getOrders as ordersLoader} from "./pages/IndexDrive.jsx";
import Catalog from "./pages/indexdrive/Catalog.jsx";
import Felials from "./pages/indexdrive/Felials";
import Booking from "./pages/indexdrive/Booking";
import Profile from "./pages/indexdrive/Profile";
import Register from "./pages/indexdrive/Register";
import Login from "./pages/indexdrive/Login";
import Cards from "./pages/indexdrive/Cards";
import History from "./pages/indexdrive/History";


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
    },
    {
        path: "indexdrive",
        element: <IndexDrive/>,
        loader: async () => {return [await userLoader(), await basketLoader()]},
        children:[
            {
                path: "",
                element: <Index3/>,
                loader: async () => {return await carsLoader()},
            },
            {
                path: "car-select",
                element: <Catalog/>,
                loader: async () => {return [await carsLoader(), await basketLoader()]},
                action: basketAction,
                children:[
                    {
                        path: ":carID",
                        element: <Catalog/>
                    }
                ]
            },
            {
                path: "branches",
                element: <Felials/>,
                loader: async () => {return await carsLoader()},
                action: basketAction
            },
            {
                path: "booking",
                element: <Booking/>,
                loader: async () => {return [await userLoader(), await basketLoader(), await carsLoader(), await activeCardLoader()]},
                action: basketAction
            },
            {
                path: "profile",
                element: <Profile/>,
                loader: async () => {return [await userLoader(), await activeCardLoader(), await ordersLoader()]},
                action: userAction
            },
            {
                path: "register",
                element: <Register/>,
                action: userAction
            },
            {
                path: "login",
                element: <Login/>,
                action: userAction
            },
            {
                path: "cards",
                element: <Cards/>,
                loader: async () => {return [await activeCardLoader(), await CardsLoader(), await userLoader()]},
                action: cardsAction
            },
            {
                path: "history",
                element: <History/>,
                loader: async () => {return [await ordersLoader(), await userLoader()]}
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
