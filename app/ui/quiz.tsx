import { rubik } from '@/app/ui/fonts'

export default function Quiz({theme}) {
    return (
        <div className="pt-16 md:pt-0 md:grid md:grid-cols-2 w-5/6 m-auto">
            <div>
                <h1 className={`${rubik.className} heading-l text-${theme}`}>Welcome to the</h1>
                <h2 className={`${rubik.className} heading-l-bold text-${theme}`}>Frontend Quiz!</h2>
                <p className={`${rubik.className} body-s s-text-${theme} mt-4 md:mt-16`}>Pick a subject to get started.</p>
            </div>
            <div>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>Accessibility</button>
            </div>
        </div>
    )
}