import React from 'react'
import { Button } from 'flowbite-react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col '>
            <h2 className='text-2xl'>
                Want to know more about my work?
            </h2>
            <p className='text-gray-500 my-2'>
                Check out my portfolio below!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href='https://nextjs-blog-sand-rho-45.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    Learn More
                </a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src="https://bairesdev.mo.cloudinary.net/blog/2022/01/programming-languages-1.jpg?tx=w_1920,q_auto" alt="" width='400px'/>
        </div>
    </div>
  )
}
