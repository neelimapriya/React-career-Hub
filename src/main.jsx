import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';
import Statistics from './Components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/jobs.json') //warning: only load the data you need. do not load all the data
      },
      {
        path:'/statistic',
        element:<Statistics></Statistics>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json') //do not load all data load only what you need
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
