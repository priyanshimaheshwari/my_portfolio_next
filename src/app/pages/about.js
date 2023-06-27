"use client"

import React,{useEffect,useRef} from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import profilePic from "../../../public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Education from '../components/Education'

const AnimatedNumbers=({value})=>{
    const ref=useRef(null);

    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000});
    const isInView=useInView(ref,{once:true});

    useEffect(() => {
      if(isInView){
          motionValue.set(value);
      }
    }, [isInView,value,motionValue])
    
    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent=latest.toFixed(0);
            }
        })
    },[springValue,value])


    return <span ref={ref}></span>
}

const about = () => {
  return (
      <>
    <div>
        <title>PriyanshiMaheshwari | About pages</title>
        <meta name="description" content="any description" />
    </div>
    <div className='flex w-full flex-col items-center justify-center'>
        <Layout className="pt-16" >
        <AnimatedText text="Passion Fuel Purpose!" className='my-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-4xl font-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium text-lg'>
                Hi, I am Priyanshi Maheshwari, a web developer with a passion for creating beautiful, functional, 
and user-centered digital experiences.

                    </p> 
<p className='font-medium my-4 text-lg'>
I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
    </p> 

<p className='font-medium text-lg'>
I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
    </p>
            </div>
           <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6'>
           <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
               <Image src={profilePic} alt="priyanshi" className="w-full h-auto rounded-2xl" />
           </div>
           <div className='flex flex-col justify-center items-end mx-2'>
               <div className=' '>
                   <span className='inline-block text-7xl font-bold'>
                       <AnimatedNumbers value={8} />
                   </span>
                   <h2 className='text-xl font-medium capitalize text-dark/75'>
                       projects completed
                   </h2>
               </div>
               </div>
               </div>
        <Skills />
        <Education />
        </Layout>
    </div>
    
    </>
  )
}

export default about