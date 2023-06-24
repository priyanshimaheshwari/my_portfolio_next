import Image from 'next/image'
import React from 'react'
import Layout from './components/Layout'
import profilepic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'


const page = () => {
  return (
    <div className='flex items-center text-dark w-full min-h-screen'>
      <Layout classname='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
          <Image src={profilepic} alt="/" className='w-full h-auto' />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>As a skilled Front-end developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
           <div className='flex items-center self-start mt-2'>
             <Link href="/Resume.pdf" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark' download={true}>Resume</Link>
             <Link href="mailto:priyanshimaheshwari16@gmail.com" target={"_blank"}>Contact</Link>
           </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default page
