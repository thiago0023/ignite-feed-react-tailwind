import React from 'react'
import Comment, { CommentType } from './Comment'

interface CommentListProps {
    comments?: CommentType[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className='mt-8'>
        {comments?.map(comment => (
            <Comment key={comment.id} comment={comment}  />
        ))} 
    </div>
  )
}
