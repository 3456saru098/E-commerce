import React from 'react'
import "./App.css"
import { Heart, HomeIcon, MapPin, ShoppingBag, User } from 'lucide-react'
import mylogo from "../public/mylogo.svg"
import Topnavbar from './components/top-navbar'
import Middlenavbar from './components/middle-navbar'
import TopNavbar from './components/top-navbar'
import MiddleNavbar from './components/middle-navbar'
import BottomNavbar from './components/bottom-navbar'
import HeroSectionSlider from './components/hero-section-slider'
import FeatureCategoriesSection from './components/feature-categories-section'
import BannerSection from './components/banner-section'
import PopularProductSection from './components/popular-product-section'
import HomeMorden from './components/home-modern'
import UpperFooterSection from './components/upper-footer-section'
import BlogCategorySection from './pages/blog-category-section'
import BlogSection from './pages/blog-section'



export default function App() {
  
  const name="E-commerce "
  return (
    <div className='space-y-4'>
      
      
      <HeroSectionSlider/>
      <FeatureCategoriesSection name={name}/>
      <BannerSection/>
      <PopularProductSection/>
      <HomeMorden/>
      <UpperFooterSection/>
<BlogSection/>  

    </div>
  )
}
