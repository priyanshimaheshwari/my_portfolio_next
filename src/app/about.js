import Head from 'next/head'
import React from 'react'
import AnimatedText from './components/AnimatedText'
import Layout from './components/Layout'

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
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium'>
                Hi, I am Priyanshi Maheshwari, a web developer with a passion for creating beautiful, functional, 
and user-centered digital experiences.

                    </p> 
<p className='font-medium my-4'>
I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
    </p> 

<p className='font-medium'>
I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
    </p>
            </div>

        </div>
        </Layout>
    </div>
    
    </>
  )
}

export default about