import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Videos/> },
      { path: '/videos', element: <Videos/> },
      { path: '/videos/:search', element: <Videos/> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
