import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Application from "../Components/Application";
import AppDetails from "../Components/AppDetails";
import ErrorPage from "../Components/ErrorPage";
import Installation from "../Components/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/apps',
        Component:Application
      },
      {
        path: "/app/:id",
        Component: AppDetails
      },
      {
        path: "/install",
        Component: Installation
      },
    ]
  },
]);