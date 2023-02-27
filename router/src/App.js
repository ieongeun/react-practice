import './App.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Video from './pages/Video.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement : <NotFound/>,
    children: [
      { index: true, element: <Home /> },
      { path: '/video', element: <Video /> },
      { path: '/video/:videoId', element: <VideoDetail /> }
    ]
  }
])

function App() {
  return (
    <p>App
      <RouterProvider router={router}/>
    </p>
  );
}

export default App;
