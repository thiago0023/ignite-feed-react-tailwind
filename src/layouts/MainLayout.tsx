import React from 'react'
import Post, { Author } from '../components/Post/Post'
import PostList from '../components/Post/PostList'
import Sidebar from '../components/Sidebar/Sidebar'
import { usePosts } from '../hooks/usePosts'

export default function MainLayout() {

  const { posts } = usePosts();

  return (
    <div className='max-w-6xl mx-auto my-8 py-0 px-4 grid md:grid-cols-main gap-8 items-start grid-cols-1'>
        <Sidebar />
        <main>
            <PostList posts={posts ?? []}/>
        </main>
    </div>
  )
}
