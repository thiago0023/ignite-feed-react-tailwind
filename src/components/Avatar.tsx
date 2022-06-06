import React, { Fragment, ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  status?: "online" | "offline" | "busy" | "away" | null
  size?: number | string
}

export default function Avatar({ status, size="12", ...rest }: AvatarProps) {
  return (
    <Fragment>
        <img className={`w-12 h-12 rounded-lg ${status && "border-4 border-solid border-gray-600 outline outline-2 outline-primary-light"} box-content`} {...rest} />
    </Fragment>
  )
}
