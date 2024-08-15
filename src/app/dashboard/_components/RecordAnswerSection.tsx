'use client';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel';
import { mockInterviewQuestionType, MockInterviewType, UserAnswer } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

type PropType = {
  mockInterviewQuestion: mockInterviewQuestionType[],
  activeQuestionIndex: number,
  interviewData: MockInterviewType
}

type JsonFeedbackRespType = {
  rating: string,
  feedback: string
}

const RecordAnswerSection = (props: PropType) => {
  const [userAnswer, setUserAnswer] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const { user } = useUser()
  const {
    error,
    interimResult,
    isRecording,
    results,
    setResults,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    if (Array.isArray(results)) {
      results.forEach((result) => {
        if (typeof result !== 'string' && 'transcript' in result) {
          setUserAnswer((prevAns) => prevAns + result.transcript);
        }
      });
    }
  }, [results]);
  

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer()
    }
  }, [userAnswer])

  const StartStopRecording = () => {
    if (isRecording) {
      stopSpeechToText()
    }
    else {
      startSpeechToText()
    }
  }

  const UpdateUserAnswer = async () => {

    setLoading(true)

    const feedbackPrompt = `Question: ${props.mockInterviewQuestion[props.activeQuestionIndex].question}, User Answer: ${userAnswer}. Depends on user question and answer for given interview question. Please give us rating for answer and feedback as area of improvement if any in just 2 to 4 lines to improve it in JSON format with rating field and feedback field`

    const result = await chatSession.sendMessage(feedbackPrompt)
    const mockJsonResp = (result.response.text()).replace("```json", "").replace("```", "")
    const JsonFeedbackResp: JsonFeedbackRespType = JSON.parse(mockJsonResp)

    const resp = await db.insert(UserAnswer).values({
      mockIdRef: props.interviewData.mockId,
      question: props.mockInterviewQuestion[props.activeQuestionIndex].question,
      correctAns: props.mockInterviewQuestion[props.activeQuestionIndex].answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp.feedback,
      rating: JsonFeedbackResp.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD-MM-yyyy')
    })

    if (resp) {
      toast('User answer recorded successfully')
      setUserAnswer('')
      setResults([])
    }
    setResults([])
    setLoading(false)
  }

  return (
    <section className='flex items-center justify-center flex-col'>
      <main className='flex flex-col w-fit h-fit justify-center items-center rounded-[0.5rem] bg-black p-5'>
        <Image alt='webcam' src={"/webcam.png"} width={200} height={200} className='absolute' />
        <Webcam
          mirrored={true}
          style={{
            height: 400,
            width: '100%',
            zIndex: 10,
          }} />
      </main>
      <Button
        disabled={loading}
        variant={"outline"}
        className='my-6'
        onClick={StartStopRecording}
      >
        {isRecording ?
          <h2 className='text-red-600 animate-pulse items-center flex gap-2'>
            <StopCircle />Stop Recording
          </h2> : <h2 className='flex gap-2 items-center'><Mic />Start Recording</h2>}
      </Button>

    </section>
  )
}

export default RecordAnswerSection
