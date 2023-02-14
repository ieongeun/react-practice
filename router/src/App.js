import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <p>메인입니다</p>,
    errorElement : <p>에러야🤢🤢</p>
  },
  {
    path:'/radio',
    element: <p>레디오레디오</p>,
  }
])

//1분

function App() {
  return (
    <p>App


      <RouterProvider router={router}/>
    </p>
  );
}

export default App;
