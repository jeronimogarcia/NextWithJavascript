import Link from 'next/link'
import React from 'react'

const ActiveLink = ({text, href}) => {
  return (
    <Link href={href}>{text}</Link>
  )
}

export default ActiveLink