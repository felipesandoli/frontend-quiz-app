import Image from 'next/image'
import { rubik } from '@/app/ui/fonts'

export default function Header() {
    return (
        <div className='flex justify-between w-11/12 mt-4 md:w-5/6 md:mt-10 xl:w-4/5 xl:mt-20 m-auto'>
            <div className='flex'>
                <Image
                    src="/icon-accessibility.svg"
                    width={40}
                    height={40}
                    alt='accessibility'
                />
                <span className={`${rubik.className} heading-s ml-6`}>Accessibility</span>
            </div>
            <div className='flex'>
                <Image 
                    src="/icon-sun-dark.svg"
                    width={24}
                    height={24}
                    alt='Light mode icon'
                    />
                <label htmlFor="" className="inline-flex items-center cursor-pointer mx-4">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-purple-icon peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <Image 
                    src="/icon-moon-dark.svg"
                    width={24}
                    height={24}
                    alt='Dark mode icon'
                />
            </div>

        </div>
    )
}