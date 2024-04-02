import React from 'react'

import {createBrowserRouter,} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
// import MyJobs from '../pages/MyJobs';
import SalaryPage from '../pages/SalaryPage';
// import CreateJob from '../pages/CreateJob';
import JobDetails from '../pages/JobDetails';
import MyJobs from '../pages/MyJobs';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/my-job",
            element: <MyJobs/>
        },
         {
             path: "/salary",
             element: <SalaryPage/>
         },
        // {
        //   path: "edit-job/:id",
        //   element: <UpdateJob/>,
        //   loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        // },
        // {
        //   path:"/jobs/:id",
        //   element: <JobDetails/>,
        // }
      ]
    },
  ]);

  export default router;