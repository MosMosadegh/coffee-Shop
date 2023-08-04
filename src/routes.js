
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Dictionary from './Components/Dictionary/Dictionary';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';

const routes = [
     {path:'/', element: <Home/>},
     {path:'/shop', element: <Shop/>},
     {path:'/dictionary', element: <Dictionary/>},
     {path:'/about', element: <About/>},
     {path:'/blog', element: <Blog/>},
     {path:'/contact', element: <Contact/>},

]

export default routes