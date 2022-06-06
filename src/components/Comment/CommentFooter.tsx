import { ThumbsUp } from 'phosphor-react'
import React from 'react'
import { usePosts } from '../../hooks/usePosts';

interface CommentFooterProps {
    commentID: number | string;
    likes: number;
}

export default function CommentFooter({ commentID, likes }: CommentFooterProps) {
    const { raiseCommentLikeCount } = usePosts();

    return (
        <footer className='mt-4'>
            <button 
            className='text-sm font-bold text-gray-400 flex items-center hover:text-primary-base rounded-sm leading-[0]'
            onClick={() => raiseCommentLikeCount(1, commentID)}
            >
                <ThumbsUp size={20} weight="bold" className='mr-3' />
                Aplaudir <span className='before:px-1 before:content-["\2022"] '>{likes}</span>
            </button>
        </footer>
    )
}
