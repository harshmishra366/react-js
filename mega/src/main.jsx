import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Authlayout,Login} from "./component/index.js"
import Home from './pages/Home.jsx'
import AddPost from './pages/Home.jsx'
import EditPost from './pages/EditPost.jsx'
import Signup from './pages/Signup'


import Post from "./pages/Post";

import AllPost from "./pages/AllPost";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/login",
              element: (
                  <Authlayout authentication={false}>
                      <Login />
                  </Authlayout>
              ),
          },
          {
              path: "/signup",
              element: (
                  <Authlayout authentication={false}>
                      <Signup />
                  </Authlayout>
              ),
          },
          {
              path: "/all-posts",
              element: (
                  <Authlayout authentication>
                      {" "}
                      <AllPost />
                  </Authlayout>
              ),
          },
          {
              path: "/add-post",
              element: (
                  <Authlayout authentication>
                      {" "}
                      <AddPost />
                  </Authlayout>
              ),
          },
          {
              path: "/edit-post/:slug",
              element: (
                  <Authlayout authentication>
                      {" "}
                      <EditPost />
                  </Authlayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
          },
      ],
  },
  ])
  



ReactDOM.createRoot(document.getElementById('root')).render(

 
 
     <Provider store={store}>
   <RouterProvider router={router} />
    </Provider>
   
  
)
