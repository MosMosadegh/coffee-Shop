
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import Dictionary from './Page/Dictionary/Dictionary';
import Home from './Page/Home/Home';
import Shop from './Page/Shop/Shop';

const routes = [
     {path:'/', element: <Home/>},
     {path:'/shop', element: <Shop/>},
     {path:'/dictionary', element: <Dictionary/>},
     {path:'/about', element: <About/>},
     {path:'/blog', element: <Blog/>},
     {path:'/contact', element: <Contact/>},

]

export default routes