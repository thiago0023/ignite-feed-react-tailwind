import React from 'react'
import { usePosts } from '../../hooks/usePosts'
import { CommentType } from '../Comment/Comment'
import CommentList from '../Comment/CommentList'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export type PostType = {
    id: number | string;
    publishedAt: Date;
    content: string;
    author: Author;
}

interface PostProps {
    post: PostType
}

export type Author = {
    avatar_url: string;
    name: string;
    role: string;
}

export default function Post({ post }: PostProps) {
    const { getCommentsByPostID } = usePosts();
    const comments = getCommentsByPostID(post.id);

    return (
        <article className='bg-gray-600 rounded-lg p-10 mt-8 first:mt-0 '>
            <PostHeader author={post.author} publishedAt={post.publishedAt} />
            <PostContent content={post.content}/>
            <PostFooter author={post.author} postID={post.id}/>
            {comments && <CommentList comments={comments}/> }
        </article>
    )
}
