'use client';
import { db } from '@/utils/db'
import { MockInterview, mockInterviewQuestionType, MockInterviewType } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import { eq } from 'drizzle-orm'
import QuestionSection from '@/app/dashboard/_components/QuestionSection'
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RecordAnswerSection = dynamic(() => import('@/app/dashboard/_components/RecordAnswerSection'), { ssr: false })


const StartInterview = (params: { params: { interviewID: string } }) => {

    const [interviewData, setInterviewData] = useState<MockInterviewType>({ id: 0, jsonMockResp: '', jobPosition: '', jobDescription: '', jobExperience: '', createdBy: '', createdAt: null, mockId: '', });

    const [mockInterviewQuestion, setMockInterviewQuestion] = useState<mockInterviewQuestionType[]>([])
    const [activeQuestionIndex, setactiveQuestionIndex] = useState<number>(0)


    useEffect(() => {
        GetInterviewDetails()
    }, [])


    // used to get Interview Details by MockId/Interview Id


    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.params.interviewID))

        if (result) {
            const jsonMockResp: mockInterviewQuestionType[] = JSON.parse(result[0].jsonMockResp)
            setMockInterviewQuestion(jsonMockResp)
            setInterviewData(result[0])
        }

    }

    return (
        <section className='my-0 md:my-20 lg:mt-32'>
            <main className='grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-12'>
                {/* Questions */}
                <QuestionSection
                    activeQuestionIndex={activeQuestionIndex}
                    mockInterviewQuestion={mockInterviewQuestion}
                    interviewData={interviewData} />

                {/* Video/Audio Recording */}
                <RecordAnswerSection
                    activeQuestionIndex={activeQuestionIndex}
                    mockInterviewQuestion={mockInterviewQuestion}
                    interviewData={interviewData}
                />
            </main>
            <div className='flex justify-end gap-6'>
                {activeQuestionIndex > 0 &&
                    <Button onClick={() => setactiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>
                }
                {activeQuestionIndex != mockInterviewQuestion.length - 1 &&
                    <Button onClick={() => setactiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>
                }
                {activeQuestionIndex == mockInterviewQuestion.length - 1 &&
                    <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
                        <Button>End Interview</Button>
                    </Link>
                }
            </div>
        </section>
    )
}

export default StartInterview





