import React from 'react'
import CommentList from '../Comment/CommentList'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export default function Post() {
    return (
        <article className='bg-gray-600 rounded-lg p-10 mt-8 first:mt-0 '>
            <PostHeader />
            <PostContent />
            <PostFooter />
            <CommentList />
        </article>
    )
}
