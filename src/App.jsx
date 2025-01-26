import React from 'react'
import "./App.css"
import { Heart, MapPin, ShoppingBag, User } from 'lucide-react'
import mylogo from "../public/mylogo.svg"
import Topnavbar from './components/top-navbar'
import Middlenavbar from './components/middle-navbar'
import TopNavbar from './components/top-navbar'
import MiddleNavbar from './components/middle-navbar'
import BottomNavbar from './components/bottom-navbar'
import HeroSectionSlider from './components/hero-section-slider'
export default function App() {
  return (
    <div className='space-y-4'>
      <TopNavbar />
      <MiddleNavbar />
      <BottomNavbar/>
      <hr className='text-gray-200'/>
      <HeroSectionSlider/>
    </div>
  )
}
