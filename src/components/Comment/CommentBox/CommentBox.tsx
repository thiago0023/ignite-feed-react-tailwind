import React from 'react'
import { Author } from '../../Post/Post'
import CommentBoxHeader from './CommentBoxHeader'

interface CommentBoxProps {
    author: Author;
    publishedAt: Date;
    content: string;
}

export default function CommentBox({ author, content, publishedAt }: CommentBoxProps) {
    return (
        <div className='bg-gray-500 rounded-lg p-4'>
            <CommentBoxHeader author={author} publishedAt={publishedAt} />
            <p className='mt-4 text-gray-300 text-sm'>{content}</p>
        </div>
    )
}
