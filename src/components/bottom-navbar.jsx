import { LayoutDashboard } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

export default function BottomNavbar() {
    return (
        <div className='w-8/12 mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <button className='flex gap-2 bg-green-500 px-4 py-2 text-white rounded-md font-medium'> <LayoutDashboard />All Departments</button>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to='/stores'>Stores</NavLink>
                <NavLink to='/megamenu'>Mega Menu</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to='dashboard'>Dashboard</NavLink>
                <NavLink to={"/docs"}>Docs</NavLink>
            </div>

            <div> </div>
        </div>
    )
}
