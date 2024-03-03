import { rubik } from '@/app/ui/fonts'
import Image from 'next/image'

export default function Quiz({theme}) {
    const topics = [
        {
            code:'html',
            screen:'HTML'
        },
        {
            code:'css',
            screen:'CSS'
        },
        {
            code:'js',
            screen:'JavaScript'
        },
        {
            code:'accessibility',
            screen:'Accessibility'
        },
    ]

    return (
        <div className="pt-16 md:pt-0 xl:grid xl:grid-cols-2 w-5/6 m-auto">
            <div>
                <h1 className={`${rubik.className} heading-l text-${theme}`}>Welcome to the</h1>
                <h2 className={`${rubik.className} heading-l-bold text-${theme}`}>Frontend Quiz!</h2>
                <p className={`${rubik.className} body-s s-text-${theme} mt-4 md:mt-16`}>Pick a subject to get started.</p>
            </div>
            <div className='grid gap-y-3 md:gap-y-6'>
                {topics.map(topic => 
                    <button className={`flex w-full p-3 xl:p-5 btn btn-${theme}`}>
                        <Image
                            src={`/icon-${topic.code}.svg`}
                            width={40}
                            height={40}
                            alt='html'
                            className={`topic-icon icon-${topic.code}`}
                        />
                        <span className={`ml-4 md:ml-8 heading-s text-${theme} `}>{topic.screen}</span>
                    </button>
                )}
            </div>
        </div>
    )
}