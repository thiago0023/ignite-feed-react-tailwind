import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react'
import Avatar from '../Avatar'
import { Author } from './Post'

interface PostHeaderProps {
    author: Author;
    publishedAt: Date;
}

export default function PostHeader({ author, publishedAt }: PostHeaderProps) {
    const { avatar_url, name, role } = author || {};
    
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL HH:mm'h'", { locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
        locale: ptBR,
        addSuffix: true
    });

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
                title={publishedAtFormatted}
                dateTime={publishedAt.toISOString()}
                className='text-sm text-gray-400'
            >
                Publicado {publishedDateRelativeToNow}
            </time>
        </header>
    )
}
