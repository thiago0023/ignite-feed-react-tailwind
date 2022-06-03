import React from 'react'

interface PostContentProps {
    content?: string
}

export default function PostContent({ content }: PostContentProps) {
    return (
        <div className='text-gray-200'>
            <p className='mt-4 leading-relaxed'>{content ?? "Comentário placeholder 👀👀👀"}</p>
        </div>
    )
}
