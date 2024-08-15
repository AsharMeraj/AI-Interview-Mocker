import { Button } from '@/components/ui/button'
import { MockInterviewType } from '@/utils/schema'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const InterviewItemCard = ({ interview }: { interview: MockInterviewType }) => {

    const router = useRouter()

    const OnFeedbackPress = () => {
        router.push(`/dashboard/interview/${interview.mockId}/feedback`)
    }
    const OnStartPress = () => {
        router.push(`/dashboard/interview/${interview.mockId}`)
    }

    return (
        <div className='border border-black/20 rounded-[0.5rem] shadow-sm p-3'>
            <h2 className='font-bold text-[--primary-color]'>{interview.jobPosition}</h2>
            <h2 className='text-sm text-gray-600'>{interview.jobExperience} Years of Experience</h2>
            <h2 className='text-xs text-gray-400'>Created At:&nbsp;{interview.createdAt}</h2>
            <div className='flex justify-between mt-2 gap-5 max-[320px]:gap-2'>
                <Link className='w-full' href={`/dashboard/interview/${interview.mockId}/feedback`}>
                    <Button
                        onClick={OnFeedbackPress}
                        size={"sm"}
                        variant={'outline'}
                        className='w-full'
                    >Feedback
                    </Button>
                </Link>
                <Link className='w-full' href={`/dashboard/interview/${interview.mockId}`}>
                    <Button
                        onClick={OnStartPress}
                        size={'sm'}
                        className='w-full'>
                        Start
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default InterviewItemCard