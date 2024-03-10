import Image from 'next/image'
import { rubik } from '@/app/ui/fonts'


export default function Header({theme, topic, onChange}:any) {

    let screenTopic

    switch(topic) {
        case "html":
            screenTopic = "HTML"
            break
        case "css":
            screenTopic = "CSS"
            break
        case "js":
            screenTopic = "JavaScript"
            break
        case "accessibility":
            screenTopic = "Accessibility"
            break     
    }

    return (
        <div className='flex justify-between w-11/12 my-4 md:w-5/6 md:my-16 xl:w-4/5 xl:my-20 m-auto'>
            {topic ? (
            <div className='flex'>
                <Image
                    src={`/icon-${topic}.svg`}
                    width={40}
                    height={40}
                    alt={topic + " icon"}
                    className='topic-icon'
                />
                <span className={`${rubik.className} m-auto heading-s text-${theme} ml-6`}>{screenTopic}</span>
            </div>
            ):(<div></div>)}
            <div className='flex'>
                <Image 
                    src={`icon-sun-${theme}-theme.svg`}
                    width={24}
                    height={24}
                    alt='Light mode icon'
                    />
                <label className="inline-flex items-center cursor-pointer mx-4 ">
                    <input type="checkbox" className="sr-only peer" onChange={onChange}/>
                    <div className="relative w-11 h-6  peer-focus:outline-none peer-focus:ring-4  rounded-full peer bg-purple-icon peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                </label>
                <Image 
                    src={`icon-moon-${theme}-theme.svg`}
                    width={24}
                    height={24}
                    alt='Dark mode icon'
                />
            </div>

        </div>
    )
}