import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <section className="bg-white ">
            <div className="lg:grid lg:min-h-[calc(100vh-6rem)] lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <Image
                        alt=""
                        src="/Sign1.jpg"
                        width={1000}
                        height={1000}
                        className="absolute  inset-0 h-full  object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">


                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl flex gap-4">
                            Welcome to AI Interview Mocker <Image alt="logo" width={40} height={40} src={'/logo.png'} className="w-fit h-fit"/>
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                href="#"
                            >
                                <Image className="w-fit h-fit" src={'/logo.png'} alt="logo" width={45} height={45}/>
                                
                            </a>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to AI Interview Mocker
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                        <div className="w-fit mx-auto mt-8">
                            <SignIn routing="hash"/>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}