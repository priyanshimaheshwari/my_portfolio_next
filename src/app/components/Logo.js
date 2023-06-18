"use-client"

import React from 'react'
import Link from 'next/link'


const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <Link href='/' className='w-16 h-16 bg-dark text-light rounded-full text-2xl font-bold tems-center justify-center ' whileHover={{scale:1.5}}>
        PM
        </Link>
    </div>
  )
}

export default Logo