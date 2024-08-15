'use client'
import { db } from '@/utils/db'
import { MockInterview, MockInterviewType } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Webcam from 'react-webcam'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Interview = ({ params }: { params: { interviewID: string } }) => {

    const [interviewData, setInterviewData] = useState<MockInterviewType>()
    const [webCamEnabled, setWebCamEnabled] = useState<boolean>(false)

    useEffect(() => {
        GetInterviewDetails()
    }, [])

    //
    // used to get Interview Details by MockId/Interview Id
    //

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewID))

        setInterviewData(result[0])
    }
    return (
        <section className='my-12 md:my-20'>
            <h2 className='font-bold text-2xl'>Let&apos;s Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10'>

                <div className='flex flex-col justify-between mt-5'>
                    <div className='p-5 rounded-lg border gap-5 flex flex-col'>
                        <h2 className='text-lg'>
                            <strong>Job Role/Job Position:&nbsp;</strong>
                            {interviewData?.jobPosition}
                        </h2>
                        <h2 className='text-lg'>
                            <strong>Job Description/Teck Stack:&nbsp;</strong>
                            {interviewData?.jobDescription}
                        </h2>
                        <h2 className='text-lg'>
                            <strong>Years of Experience:&nbsp;</strong>
                            {interviewData?.jobPosition}
                        </h2>
                    </div>
                    <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-600'><Lightbulb /><strong>Information</strong></h2>
                        <h2 className='mt-3 text-yellow-600'>Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview, It has 5 questions which you can answer and at the last you will get the report on the basis of your answer. NOTE: We never record your video, Web cam access you can disable at any time if you want</h2>
                    </div>
                </div>
                <div className='h-fit flex flex-col '>
                    {
                        webCamEnabled ? <Webcam style={{ height: 400, width: '100%' }}
                            className='rounded-[0.5rem]'
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            mirrored={true} /> :
                            <>
                                <WebcamIcon className='h-[25rem] w-full mb-7 p-32 rounded-[0.5rem] border bg-black/10' />
                                <Button onClick={() => setWebCamEnabled(true)} className='w-full'>Enable Web Cam and Microphone</Button>
                            </>

                    }

                </div>
            </div>
            <div className='flex justify-end items-end mt-2'>
                <Link href={`/dashboard/interview/${params.interviewID}/start`}>
                    <Button >Start Interview</Button>
                </Link>
            </div>


        </section>
    )
}

export default Interview