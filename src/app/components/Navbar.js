"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import  { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons'
import Logo from './Logo'
import {motion} from "framer-motion"

const CustomLink=({href,title,className=""})=>{
  const router=useRouter();
  
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${router.asPath === href?"w-full":"w-0"} `}>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav className=''>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4' />
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/achievements" title="Achievements" className='mx-4 '/>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href='https://twitter.com/maheshwari76819?t=s96WkVLli9n2vKO25QB41Q&s=08' target={"_blank"} whileHover={{y:-4}}
            whileTap={{scale:0.9}} className="w-6 mr-3">
              <TwitterIcon />
            </motion.a>
            <motion.a href='https://github.com/priyanshimaheshwari' target={"_blank"} whileHover={{y:-4}}  whileTap={{scale:0.9}} className="w-6 mx-3" >
              <GithubIcon />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/priyanshi-maheshwari-438bab225' target={"_blank"} whileHover={{y:-4}}  whileTap={{scale:0.9}}  className="w-6 mx-3" >
              <LinkedInIcon />
            </motion.a>
            <motion.a href='/' target={"_blank"} whileHover={{y:-4}}  whileTap={{scale:0.9}}  className="w-6 ml-3" >
              <PinterestIcon />
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%] '>
        <Logo />
        </div>
    </header>
  )
}

export default Navbar