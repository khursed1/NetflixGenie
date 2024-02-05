import { createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login'
import { RouterProvider } from 'react-router-dom';

const Body = () => {
  console.log(import.meta.env.VITE_apiKey)
  const appRouter=createBrowserRouter([
    /**Create browser router contains array of path */
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;