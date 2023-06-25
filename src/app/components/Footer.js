"use client"

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <div className='flex items-center justify-between w-full h-full  z-0 bg-light py-8 px-32'>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className='flex items-center'>Build With
      <span className='text-primary text-2xl px-1'>&#9825;</span>
      by&nbsp; Priyanshi Maheshwari</div>
      
      </div>
    </div>
  )
}

export default Footer