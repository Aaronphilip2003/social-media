import React from 'react'
import { Button } from 'flowbite-react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col '>
            <h2 className='text-2xl'>
                Want to Learn More about Personality Development?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my resources on Personality Development
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href='https://actspot.com/' target='_blank' rel='noopener noreferrer'>
                    Learn More
                </a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguBTXcF987tNm4qIZbyV2J2gBAft_OvT37tR9c2i54g_pznlbaV37aBFgsQ9ezOVC-1sPBexOdhCPuNIGZpZOJrYrgwhJtdVN2j1bYJI9V-uCVph8aKvCjMLMu_gdqN4afZCh9y3PBcdChMbYatunbNIT7kY65uoR5_x_JrJo6B0pKXSUtYCdgyYXchVHA/s2916/personality.jpg" alt="" width='400px'/>
        </div>
    </div>
  )
}
