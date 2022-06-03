import React, { Fragment } from 'react'

export default function Cover() {
    return (
        <Fragment>
            <img
                className='w-full h-[72px] object-cover'
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
        </Fragment>
    )
}
