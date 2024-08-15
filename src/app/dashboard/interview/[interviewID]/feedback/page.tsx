'use client'
import { db } from '@/utils/db'
import { UserAnswer, UserAnswerType } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const Feedback = ({ params }: { params: { interviewID: string } }) => {

  const [feedbackList, setFeedbackList] = useState<UserAnswerType[]>([])

  const router = useRouter()

  useEffect(() => {
    GetFeedback()
  }, [])

  const GetFeedback = async () => {
    const result = await db.select().from(UserAnswer).
      where(eq(UserAnswer.mockIdRef, params.interviewID))
      .orderBy(UserAnswer.id)
    setFeedbackList(result)
  }

  let sumOfRating = 0
  feedbackList && feedbackList.map((item) => item.rating).map((rating) => {
    sumOfRating += Number(rating)
  })


  return (
    <section className='p-10'>
      {feedbackList.length == 0 ?
        <h2 className='font-bold text-3xl text-black/70 mb-5'>No Interivew Feedback Record Found!</h2>
        :
        <>
          <h2 className='text-2xl font-bold text-green-500'>Congratulations!</h2>
          <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
          <h2 className='text-[--primary-color] text-lg my-6'>Your overall interview rating:&nbsp; <strong>{sumOfRating}/10</strong></h2>
          <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
          {feedbackList && feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-8'>
              <CollapsibleTrigger className='p-3 bg-black/5 shadow-lg shadow-black/10 rounded-[0.5rem] my-6 text-left flex justify-between gap-7 w-full'>
                <h2>
                  {item.question}
                </h2>
                <div>
                  <ChevronDown width={'1.5rem'} height={'1.5rem'} className='w-6 h-6' />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <main className='flex flex-col gap-2 mb-4 border border-black/20 rounded-[0.5rem]'>
                  <h2
                    className='text-red-500 p-2  rounded-[0.5rem]'>
                    <strong>Rating:&nbsp;</strong>
                    {item.rating}
                  </h2>
                  <h2
                    className='bg-red-50 p-2 rounded-[0.5rem] text-sm text-red-900'>
                    <strong>Your Answer:&nbsp;</strong>
                    {item.userAns}
                  </h2>
                  <h2
                    className='bg-green-50 p-2 rounded-[0.5rem] text-sm text-green-900'>
                    <strong>Correct Answer:&nbsp;</strong>
                    {item.correctAns}
                  </h2>
                  <h2
                    className='bg-blue-50 p-2 rounded-[0.5rem] text-sm text-blue-800'>
                    <strong>Feedback:&nbsp;</strong>
                    {item.feedback}
                  </h2>
                </main>
              </CollapsibleContent>
            </Collapsible>
          ))}

        </>
      }
      <Link href={'/dashboard'}>
        <Button>Go Home</Button>
      </Link>
    </section>
  )
}

export default Feedback