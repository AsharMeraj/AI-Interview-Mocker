import { mockInterviewQuestionType, MockInterviewType, } from '@/utils/schema'
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

type PropType = {
    mockInterviewQuestion: mockInterviewQuestionType[],
    activeQuestionIndex: number,
    interviewData: MockInterviewType
}

const QuestionSection = (props: PropType) => {


    const textToSpeech = (text: string) => {
        if ("speechSynthesis" in window) {
            const speech = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(speech)
        }
        else {
            alert('Sorry, Your browser does not support text to speech')
        }

    }

    return props.mockInterviewQuestion && (
        <div className='p-5 border rounded-[0.5rem] h-full flex flex-col justify-between'>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {props.mockInterviewQuestion && props.mockInterviewQuestion.map((question, index) => {
                        return (
                            <h2
                                key={index}
                                className={props.activeQuestionIndex == index ? 'bg-[--primary-color] text-white p-2 rounded-full text-xs md:text-sm text-center cursor-pointer' : 'p-2 rounded-full bg-black/5 text-xs md:text-sm text-center cursor-pointer'}>
                                Question #{index + 1}
                            </h2>
                        )
                    })}

                </div>
                <h2 className='mt-5 text-md md:text-lg'>{props.mockInterviewQuestion[props.activeQuestionIndex]?.question}</h2>

                <Volume2
                    className='cursor-pointer my-3'
                    onClick={() => textToSpeech(props.mockInterviewQuestion[props.activeQuestionIndex]?.question)} />
            </div>

            <div className='border rounded-[0.5rem] p-5 bg-[#c90000]/15'>
                <h2 className='flex gap-2 items-center text-[--primary-color]'>
                    <Lightbulb />
                    <strong>Note:</strong>
                </h2>
                <h2 className='text-sm text-[--primary-color] my-2'>Click on record answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each of question and your answer to compare it.</h2>
            </div>
        </div>
    )
}

export default QuestionSection

