import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// px-4 py-20 lg:py-32 mx-auto lg:gap-8 xl:gap-0

const Hero = () => {
  return (
    <section className=" dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-20 lg:py-32 w-fit m-auto grid-cols-1 lg:grid-cols-2 gap-0 ">
      <div id='font-heading' className="mr-auto place-self-center ">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-normal md:text-5xl xl:text-6xl dark:text-white">Welcome to Ai Interview Mocker &#x28;AIM&#x29;</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional solutions. Accelerate critical development work, eliminate toil with amazing AI workflow.</p>
        <Link href={'/dashboard'} className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
          <Button className=''>Get Started</Button>
        </Link>
      </div>
      <div className="w-full h-full hidden lg:flex justify-center">
        <Image width={450} height={400} src="/hero2.png" className='' alt="hero image" />
      </div>
    </div>
  </section>
  )
}

export default Hero