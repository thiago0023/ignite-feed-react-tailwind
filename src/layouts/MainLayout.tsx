import React from 'react'
import Post, { Author } from '../components/Post/Post'
import PostList from '../components/Post/PostList'
import Sidebar from '../components/Sidebar/Sidebar'

const authors: Author[] = [
  {
    avatar_url: 'https://github.com/thiago0023.png',
    name: 'Thiago Lima',
    role: 'Fullstack Developer Pl.'
  },
  {
    avatar_url: 'https://github.com/renebertoni.png',
    name: 'Rene Bertoni',
    role: 'Fullstack Dev | Game Dev | Overwatch Streamer'
  } 

]

const posts = [
  {
    id: 1,
    publishedAt: new Date(),
    content: 'Tinham dois mercados, eles estavam voando.\nUm deles caiu, porque o outro é?',
    author: authors[0],
    comments: [
      {
        id: 1,
        author: authors[1],
        content: 'O outro é o supermercado',
        likes: 10,
        publishedAt: new Date()
      }
    ]
  },
  {
    id: 2,
    publishedAt: new Date(),
    content: 'Cansado de fazer regrinha...',
    author: authors[1],
    comments: [
      {
        id: 1,
        author: authors[0],
        content: 'Vish mano, seu trampo parece estar bem regrado',
        likes: 10,
        publishedAt: new Date()
      }
    ]
  },
]

export default function MainLayout() {
  return (
    <div className='max-w-6xl mx-auto my-8 py-0 px-4 grid md:grid-cols-main gap-8 items-start grid-cols-1'>
        <Sidebar />
        <main>
            <PostList posts={posts}/>
        </main>
    </div>
  )
}
