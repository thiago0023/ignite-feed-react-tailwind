import React from 'react'
import Avatar from '../Avatar'
import CommentBox from './CommentBox/CommentBox'
import CommentFooter from './CommentFooter'

export default function Comment() {
    return (
        <div className='mt-6 flex gap-4'>
            <Avatar src="https://github.com/thiago0023.png"/>
            <div className='flex-1'>
                <CommentBox />
                <CommentFooter />
            </div>
        </div>
    )
}
