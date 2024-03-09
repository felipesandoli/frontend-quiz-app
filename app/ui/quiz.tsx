import { rubik } from '@/app/ui/fonts'
import Image from 'next/image'
import { useState } from 'react'
import quizzes from './data.json'

export default function Quiz({theme}:any) {
    const [topic, setTopic] = useState('')
    const [questionNumber, setQuestionNumber] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
    const [isQuizCompleted, setIsQuizCompleted] = useState(false)

    console.log(questionNumber)
    const quiz = topic ? (quizzes.quizzes.filter((quiz) => quiz.title === topic)[0].questions) : ([{question: '', options: [], answer: ''}])
    

    const { question, options, answer } = quiz[questionNumber]
    const optionLetters = ["A", "B", "C", "D"]


    
    function handleTopicSelection(topic:any) {
        setTopic(topic.code)
    }

    function submitAnswer() {
        if (selectedAnswer === answer) {
            setScore(score+1)
        }
        if (questionNumber < 9) {
            setIsAnswerSubmitted(true)
        } else {
            finalizeQuiz()
        }
    }

    function nextQuestion() {
        setSelectedAnswer('')
        setIsAnswerSubmitted(false)
        setQuestionNumber(questionNumber+1)
        
    }

    function finalizeQuiz() {
        setIsQuizCompleted(true)
        setQuestionNumber(0)
        setTopic('')
        setSelectedAnswer('')
        setIsAnswerSubmitted(false)
    }

    function handleQuizButton() {
            // console.log(questionNumber)
            isAnswerSubmitted ? (nextQuestion()) : submitAnswer()
    }

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

    return ( (!topic && !isQuizCompleted) ? ( <QuizIntro /> ) : isQuizCompleted ? (<GameOver/>) : (<QuizQuestions />))

    function QuizIntro() {
        return <div className="pt-16 md:pt-0 xl:grid xl:grid-cols-2 w-5/6 m-auto">
            <div>
                <h1 className={`${rubik.className} heading-l text-${theme}`}>Welcome to the</h1>
                <h2 className={`${rubik.className} heading-l-bold text-${theme}`}>Frontend Quiz!</h2>
                <p className={`${rubik.className} body-s s-text-${theme} mt-4 md:mt-16`}>Pick a subject to get started.</p>
            </div>
            <div className='grid gap-y-3 md:gap-y-6'>
                {topics.map(topic => 
                    <button className={`flex w-full p-3 xl:p-5 btn btn-${theme} `} key={topic.code} onClick={() => handleTopicSelection(topic)}>
                        <Image
                            src={`/icon-${topic.code}.svg`}
                            width={40}
                            height={40}
                            alt='html'
                            className={`icon-topic icon-${topic.code}`}
                        />
                        <span className={`ml-4 md:ml-8 heading-s text-${theme}`}>{topic.screen}</span>
                    </button>
                )}
            </div>
        </div>
    }

    function QuizQuestions() {
        return <div className="pt-16 md:pt-0 grid grid-cols-1 xl:grid-cols-2 w-5/6 m-auto">
        <div className='xl:w-3/4 flex flex-col justify-between'>
            <div>
                <p className={`${rubik.className} body-s s-text-${theme} mt-4 md:mt-16`}>{`Question ${questionNumber + 1} of 10.`}</p>
                <h1 className={`${rubik.className} heading-m text-${theme}`}>{question}</h1>
            </div>
            <div className={`w-100 p-1 mt-6 mb-10 xl:mb-0 progress-bar progress-bar-${theme}`}>
                {/* On each increment of questionNumber, progress bar goes up 10% as there are 10 questiosn in list of questions  */}
                <div className={`w-${(questionNumber+1)*10}  progress-bar-fill`}></div>
            </div>
        </div>
        <div className='grid gap-y-3 md:gap-y-6' >
            {options.map((option, index) => 
                <button className={`flex w-full p-3 xl:p-5 btn btn-${theme}`} key={index} onClick={() => setSelectedAnswer(option)}>
                    <div className={`grid justify-items-center w-10 h-10 md:w-14 md:h-14 option-icon heading-s`}>
                        {optionLetters[index]}                                
                    </div>
                    <span className={`ml-4 md:ml-8 heading-s text-left text-${theme}`}>{option}</span>
                </button>
            )}
        </div>
        {selectedAnswer ?
            (<button className="xl:col-start-2 col-span-1 mt-3 md:mt-8 h-12 md:h-24 btn-submit heading-s" onClick={handleQuizButton}>{isAnswerSubmitted ? "Next Queston" : "Submit Answer"}</button>) :
            (<></>)
        }
    </div>
    }

    function GameOver() {
        return <div>
            Game Over.
            SCORE: {score}
        </div>
    }
}
