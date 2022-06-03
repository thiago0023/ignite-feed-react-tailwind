import { ThumbsUp } from 'phosphor-react'
import React from 'react'

export default function CommentFooter() {
    return (
        <footer className='mt-4'>
            <button className='text-sm font-bold text-gray-400 flex items-center hover:text-primary-base rounded-sm leading-[0]'>
                <ThumbsUp size={20} weight="bold" className='mr-3' />
                Aplaudir <span className='before:px-1 before:content-["\2022"] '>33</span>
            </button>
        </footer>
    )
}
