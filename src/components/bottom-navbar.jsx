import { LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function BottomNavbar() {
    return (
        <div className='w-8/12 mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <button className='flex gap-2 bg-green-500 px-4 py-2 text-white rounded-md font-medium'> <LayoutDashboard />All Departments</button>
                <p>Home</p>
                <p>Shop</p>
                <p>Stores</p>
                <p>Mega Menu</p>
                <p>Pages</p>
                <p>Dashboard</p>
                <p>Docs</p>
            </div>

            <div> </div>
        </div>
    )
}
