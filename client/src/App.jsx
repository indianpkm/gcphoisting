

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MyOtherComponent } from "./MyOtherComponent";
import Home from "./Home";
  
  
  const router = createBrowserRouter([
    {
      path: "/my",
      element: <MyOtherComponent/>,
    }, 
    {
      path: "/",
      element: <Home/>,
    }
  ]);
  
  function App() {
  
    return (
      <>
      
      <RouterProvider router={router} />
  
      </>
    )
  }
  
  export default App
  