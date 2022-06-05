import React from 'react'
import { Author } from '../../Post/Post'
import { CommentType } from '../Comment';
import CommentBoxHeader from './CommentBoxHeader'

interface CommentBoxProps {
    comment: CommentType;
}

export default function CommentBox({ comment }: CommentBoxProps) {
    const { author, content, publishedAt, id, likes } = comment;

    return (
        <div className='bg-gray-500 rounded-lg p-4'>
            <CommentBoxHeader author={author} publishedAt={publishedAt} commentID={id}/>
            {
                content.map((line, index) => {
                    
                    if(line.type === "link") {
                        return <p className='mt-4 text-gray-300 text-sm'><a href='#' key={index}>{line.content}</a></p>
                    }
                    else if(line.type === "text") {
                        return <p className='mt-4 text-gray-300 text-sm' key={index}>{line.content}</p>
                    }
                })
            }
        </div>
    )
}
