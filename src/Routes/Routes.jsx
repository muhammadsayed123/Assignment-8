import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Application from "../Components/Application";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/apps',
        Component:Application
      }
    ]
  },
]);