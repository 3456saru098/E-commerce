import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import './index.css'
import App from './App.jsx'
import Docs from './pages/docs.jsx';
import SingleCcategory from './pages/single-category.jsx';
import TopNavbar from './components/top-navbar.jsx';
import MiddleNavbar from './components/middle-navbar.jsx';
import BottomNavbar from './components/bottom-navbar.jsx';
import Footer from './components/footer.jsx';
import Blog_Section from './pages/blog-section.jsx';
import BlogPage from './pages/blogs.jsx';
import Shop from './pages/shop.jsx';
import Stores from './pages/stores.jsx';
import MegaMenu from './pages/mega-menu.jsx';
import Dashboard from './pages/dashboard.jsx';
import Blog from './pages/blogs.jsx';
import ProductDescription from './pages/product-description.jsx';
import SignIn from './pages/sign-in.jsx';
import SignUp from './pages/sign-up.jsx';


export function Root() {
  const location=useLocation()


  return (
    <StrictMode>
   
    {/* this is render top in  every page */}
    { location.pathname !== "/sign-in " && location.pathname !== "/sign-in" &&<div className='space-y-6'>
      <TopNavbar/>
    <MiddleNavbar/>
    <BottomNavbar/>
    <hr className='text-gray-200'/></div>
}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/categories/:id" element={<SingleCcategory />} />
        <Route path="/blog-section/:id" element={<Blog_Section />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/shop/" element={<Shop/>} />
        <Route path="/stores" element={<Stores/>} />
        <Route path="/megamenu" element={<MegaMenu/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
        <Route path="/shop/:id" element={<ProductDescription/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />


      </Routes>
    
     {location.pathname !== "/sign-in " && location.pathname !== "/sign-in" && < Footer/> }  
       
  </StrictMode>
  );
}
createRoot(document.getElementById("root")).render( <BrowserRouter>  <Root /> </BrowserRouter>  );