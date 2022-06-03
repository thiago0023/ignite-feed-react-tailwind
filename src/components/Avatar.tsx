import React, { Fragment } from 'react'

interface AvatarProps {
  status?: "online" | "offline" | "busy" | "away" | null
  size?: number | string
  src: string
}

export default function Avatar({ src, status, size="12" }: AvatarProps) {
  return (
    <Fragment>
        <img className={`w-12 h-12 rounded-lg ${status && "border-4 border-solid border-gray-600 outline outline-2 outline-primary-light"} box-content`} src={src} />
    </Fragment>
  )
}
