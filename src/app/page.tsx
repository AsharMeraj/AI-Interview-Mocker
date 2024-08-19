import React from 'react'
import Header from './dashboard/_components/Header'
import Hero from './_homeComponents/Hero'
import Feature1 from './_homeComponents/Feature1'
import Feature2 from './_homeComponents/Feature2'
import Worth from './_homeComponents/Worth'
import FreeTrial from './_homeComponents/FreeTrial'
import Reviews from './_homeComponents/Reviews'


const page = () => {
  return (
    <main>
      <Hero />
      <Feature1 />
      <Feature2 />
      <Worth />
      <Reviews />
      <FreeTrial />
    </main>
  )
}

export default page
