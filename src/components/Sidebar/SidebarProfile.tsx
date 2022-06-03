import React from 'react'
import Avatar from '../Avatar'

export default function SidebarProfile() {
    return (
        <div className='flex flex-col items-center -mt-2'>
            <Avatar src="https://github.com/thiago0023.png"status="online"/>
            <strong className='mt-4 text-gray-100 leading-relaxed'>Thiago Lima</strong>
            <span className='text-sm text-gray-400 leading-relaxed' >Fullstack Developer Pl.</span>
        </div>
    )
}
