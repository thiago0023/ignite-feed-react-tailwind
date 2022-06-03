import React, { Fragment } from 'react'
import Post, { PostType } from './Post'

interface PostListProps {
    posts: PostType[]
}

export default function PostList({ posts }: PostListProps) {
  return (
      <Fragment>
          {
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
          }
      </Fragment>
  )
}
