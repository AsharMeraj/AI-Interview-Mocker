import React from 'react'
import Header from '../dashboard/_components/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Upgrade = () => {

    return (
        <>
            <Header />
            <section className='p-10'>
                <h2 className='w-fit m-auto text-2xl font-bold'>Upgrade</h2>
                <h2 className='w-fit m-auto text-gray-500'>Upgrade to monthly plan to access unlimited mock interview</h2>
                <main className=''>
                    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                            <div
                                className="rounded-2xl transition-all border border-black/20 p-6 shadow-lg shadow-white hover:shadow-black/10 hover:scale-105 duration-300 sm:order-last sm:px-8 lg:p-12"
                            >
                                <div className="text-center">
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Free
                                        <span className="sr-only">Plan</span>
                                    </h2>

                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>

                                        <span className="text-sm font-medium text-gray-700">/month</span>
                                    </p>
                                </div>

                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Create Free Mock Interviews
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Unlimited Retake
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-xl text-[--primary-color]'>&#x292B;</strong>&nbsp;
                                            Practice Question
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-xl text-[--primary-color]'>&#x292B;</strong>&nbsp;
                                            Special AI Guide
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-xl text-[--primary-color]'>&#x292B;</strong>&nbsp;
                                            Email Support
                                        </span>
                                    </li>


                                </ul>
                                <Link href={'/dashboard'}>
                                    <div className='w-full m-auto mt-8 '>
                                        <Button className='w-full rounded-full'>Get Started</Button>
                                    </div>
                                </Link>
                            </div>

                            <div
                                className="rounded-2xl transition-all border border-black/20 p-6 shadow-lg shadow-white hover:shadow-black/10 hover:scale-105 duration-300 sm:order-last sm:px-8 lg:p-12"
                            >
                                <div className="text-center">
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Pro
                                        <span className="sr-only">Plan</span>
                                    </h2>

                                    <p className="mt-2 sm:mt-4">
                                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

                                        <span className="text-sm font-medium text-gray-700">/month</span>
                                    </p>
                                </div>

                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Create Free Mock Interviews
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Unlimited Retake
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Practice Question
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Special AI Guide
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                        <span className="text-gray-800 text-sm">
                                            <strong className='text-lg text-green-500'>&#x2713;</strong>&nbsp;
                                            Email Support
                                        </span>
                                    </li>


                                </ul>
                                <Link href={process.env.NEXT_PUBLIC_NEXT_PUBLIC_STRIPE_PAYMENT_LINK as string}>
                                    <div className='w-full m-auto mt-8 '>
                                        <Button className='w-full rounded-full'>Get Started</Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Upgrade