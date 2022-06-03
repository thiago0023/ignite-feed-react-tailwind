import React from 'react'
import Avatar from '../Avatar'

export default function PostHeader() {
    return (
        <header className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Avatar src="https://github.com/thiago0023.png"status="online"/>
                <div className='flex flex-col '>
                    <strong className='text-gray-100 leading-relaxed'>Thiago Lima</strong>
                    <span className='text-gray-300 text-sm leading-relaxed'>Fullstack Developer Pl.</span>
                </div>
            </div>
            <time
                title="03 de Junho de 2022 às 01:00"
                dateTime='2022-06-03 01:00:00'
                className='text-sm text-gray-400'
            >
                Publicado há 1h
            </time>
        </header>
    )
}
