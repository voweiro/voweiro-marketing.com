import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Blog from './pages/Blog'

function App() {

  const router = createBrowserRouter ([
    {
      path: '/',
      element:<Root/>,
      children: [{
        path : '/',
        element: <Home/>
      },

      {
        path: 'about-us',
        element:<About/>
      },
      
      {
        path:'service',
        element :<Service/>
      },

      {
        path: 'blog',
        element : <Blog/>
      }

      ]
}])
  
  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
