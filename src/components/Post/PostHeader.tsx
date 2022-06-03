import React from 'react'
import Avatar from '../Avatar'
import { Author } from './Post'

interface PostHeaderProps {
    author?: Author;
    publishedAt?: Date;
}

export default function PostHeader({ author, publishedAt }: PostHeaderProps) {

    const { avatar_url, name, role } = author || {};

    return (
        <header className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Avatar src={avatar_url ?? ""} status="online"/>
                <div className='flex flex-col '>
                    <strong className='text-gray-100 leading-relaxed'>{name ?? "Placeholder Name"}</strong>
                    <span className='text-gray-300 text-sm leading-relaxed'>{role ?? "Quebra galho"}</span>
                </div>
            </div>
            <time
                title="03 de Junho de 2022 às 01:00"
                dateTime={publishedAt?.toDateString() ?? "2022-06-03 01:00:00"}
                className='text-sm text-gray-400'
            >
                Publicado há 1h
            </time>
        </header>
    )
}
