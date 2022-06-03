import React from 'react'
import Avatar from '../Avatar'
import { Author } from '../Post/Post'
import CommentBox from './CommentBox/CommentBox'
import CommentFooter from './CommentFooter'

export type CommentType = {
    author: Author;
    content: string;
    publishedAt: Date;
    id: number | string;
    likes: number;
}

interface CommentProps {
    comment: CommentType;
}

export default function Comment({ comment }: CommentProps) {
    const { author, content, publishedAt, id, likes } = comment;

    return (
        <div className='mt-6 flex gap-4'>
            <Avatar src={author.avatar_url}/>
            <div className='flex-1'>
                <CommentBox author={author} content={content} publishedAt={publishedAt} key={id}/>
                <CommentFooter />
            </div>
        </div>
    )
}
