import { Trash } from 'phosphor-react'
import React from 'react'

export default function CommentBoxHeader() {
    return (
        <header className='flex items-start justify-between'>
            <div className='flex flex-col'>
                <strong className='text-sm text-gray-100 leading-relaxed'>Nome do usuário</strong>
                <time
                    title="03 de Junho de 2022 às 01:00"
                    dateTime='2022-06-03 01:00:00'
                    className='text-xs text-gray-400 leading-relaxed'
                >
                    Cerca de 1h
                </time>
            </div>
            <button title='Deletar comentário' className='bg-transparent border-0 text-gray-400 cursor-pointer leading-[0] rounded-sm hover:text-danger-base transition-colors duration-150'>
                <Trash size={20} />
            </button>
        </header>
    )
}
