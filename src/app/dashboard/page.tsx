import React, { Suspense } from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

const Dashboard = () => {
  return (
    <section className='p-10 md:py-20 lg:py-32 flex justify-center items-center'>
      <div className='w-full'>
        <h2 id='font-heading' className='text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-normal'>Welcome to the Dashboard</h2>
        <h2 className='text-gray-500 mt-2'>Create and Start your AI Mockup Interview</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 my-8'>
          <AddNewInterview />
        </div>

        {/* Previous Interview List */}
        <Suspense fallback={<div className='text-3xl w-fit m-auto'>Loading...</div>}>
          <InterviewList />
        </Suspense>
      </div>
    </section>
  )
}

export default Dashboard