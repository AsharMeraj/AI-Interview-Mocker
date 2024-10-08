'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { db } from '@/utils/db'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'



const AddNewInterview = () => {

    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [jobPosition, setJobPosition] = useState<string>()
    const [jobDescription, setJobDescription] = useState<string>()
    const [jobExperience, setJobExperience] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [jsonResponse, setJsonResponse] = useState<string[]>([])

    const { user } = useUser()

    const router = useRouter()

    const onSubmit = async (event: React.FormEvent) => {
        setLoading(true)
        event.preventDefault()

        const InputPrompt: string = `Job Position: ${jobPosition}, Job Description: ${jobDescription}, Years of Experience: ${jobExperience}, Depends on this information please give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT } interview questions with answers in 3 to 5 lines in json format`

        const result = await chatSession.sendMessage(InputPrompt)

        const MockJsonResp = (result.response.text()).replace("```json", "").replace("```", "")


        setJsonResponse([...jsonResponse, MockJsonResp])


        if (MockJsonResp) {
            const resp = await db.insert(MockInterview)
                .values({
                    mockId: uuidv4()!,
                    jsonMockResp: MockJsonResp!,
                    jobPosition: jobPosition!,
                    jobDescription: jobDescription!,
                    jobExperience: jobExperience!,
                    createdBy: user?.primaryEmailAddress?.emailAddress!,
                    createdAt: moment().format("DD-MM-YYYY"),


                }).returning({ mockId: MockInterview.mockId })


            if(resp){
                setOpenDialog(false)
                router.push(`/dashboard/interview/${resp[0].mockId}`)
            }
        }
        else {
            console.log("Error")
        }


        setLoading(false)
    }

    return (
        <div className=''>
            <div className='p-10 border border-black/20 rounded-3xl hover:scale-105 shadow-white shadow-md hover:shadow-gray-400 cursor-pointer transition-all' onClick={() => setOpenDialog(true)}>
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog}>
                <DialogContent className='max-w-2xl'
                >
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Tell us more about your job interviewing</DialogTitle>
                        <DialogDescription asChild>
                            <div>

                                <form onSubmit={onSubmit}>
                                    <div>
                                        <h2 className='text-black/80 '>Add details about your job postion/role, Job description and years of experience</h2>
                                        <div className='mt-7 my-3'>
                                            <label className='text-black/80' >Job Role/Job Positon</label>
                                            <Input placeholder='Ex. Full Stack Developer' className='placeholder:text-black/60 mt-1' required onChange={(event) => setJobPosition(event.target.value)} />
                                        </div>
                                        <div className='my-3'>
                                            <label className='text-black/80'>Job Description/Teck Stack (In Short)</label>
                                            <Textarea placeholder='Ex. React, Angular, Node.js, MySQL etc' className='placeholder:text-black/60 mt-1' required onChange={(event) => setJobDescription(event.target.value)} />
                                        </div>
                                        <div className='my-3'>
                                            <label className='text-black/80'>Years of Experience</label>
                                            <Input placeholder='Ex. 5' type='number' className='placeholder:text-black/60 mt-1' required max={55} onChange={(event) => setJobExperience(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className='flex gap-5 justify-end'>
                                        <Button type='button' variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                        <Button type='submit' disabled={loading}>
                                            {
                                                loading ?
                                                    <>
                                                        Generating from AI <LoaderCircle className='animate-spin ml-2' />
                                                    </> : "Start Interview"
                                            }
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div >
    )
}

export default AddNewInterview