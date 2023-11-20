
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import Dictionary from './Page/Dictionary/Dictionary';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';

import Shop from './Page/Shop/Shop';

const routes = [
     {path:'/', element: <Home/>},
     {path:'/shop', element: <Shop/>},
     {path:'/dictionary', element: <Dictionary/>},
     {path:'/about', element: <About/>},
     {path:'/blog', element: <Blog/>},
     {path:'/contact', element: <Contact/>},
     {path:'/login', element: <Login/>},
     {path:'/register', element: <Register/>},

]

export default routes