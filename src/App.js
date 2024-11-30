
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Applayout from './components/applayout';
import Signin from './components/pages/signin/signin'
import Signup from './components/pages/signup/signup';
import Products from './products-details/products';





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/products",
      element : <Products/>,
    },
  ]);

  return (
    <div className="App">
    
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
