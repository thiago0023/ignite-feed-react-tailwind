import React from 'react'
import brandLogo from '../assets/brand-logo.svg';

export default function Header() {
    return (
        <div className='font-bold text-2xl flex justify-center items-center h-[100px] bg-gray-600 text-gray-100'>
            <div className='flex items-center gap-x-4 justify-between'>
                <img className="h-16" src={brandLogo} alt="Brand logo" />
                <p>Feednite</p>
            </div>
        </div>
    )
}
