import React from 'react'
import Post from '../components/Post/Post'
import Sidebar from '../components/Sidebar/Sidebar'

export default function MainLayout() {
  return (
    <div className='max-w-6xl mx-auto my-8 py-0 px-4 grid md:grid-cols-main gap-8 items-start grid-cols-1'>
        <Sidebar />
        <main>
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    </div>
  )
}
