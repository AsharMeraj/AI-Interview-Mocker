'use client'
import { db } from '@/utils/db'
import { MockInterview, MockInterviewType } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq, desc } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard'

const InterviewList = () => {

    const [interviewList, setInterviewList] = useState<MockInterviewType[]>([])


    const { user } = useUser()

    useEffect(() => {
        user && GetInterviewList()
    }, [user])

    const GetInterviewList = async () => {
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                const result = await db.select().from(MockInterview)
                    .where(eq(MockInterview.createdBy, user.primaryEmailAddress?.emailAddress))
                    .orderBy(desc(MockInterview.id))
                setInterviewList(result)
            }
        } catch (error) {
            console.error("Error fetching interview list:", error);
        }
    }


    return (
        <section className='mt-8'>
            <h2 className='font-semibold text-2xl text-center w-fit'>Previous Interview List</h2>
            {
                interviewList.length == 0 ?
                    <h2 className='text-[--primary-color] grid grid-cols-1 md:grid-cols-2 my-5'>No interview has been taken yet. Click the above button to create a new interview session</h2>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                        {
                            interviewList && interviewList.map((interview, index) => (
                                <InterviewItemCard key={index} interview={interview} />
                            ))
                        }
                    </div>
            }
        </section>
    )
}

export default InterviewList