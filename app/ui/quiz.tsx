import { rubik } from '@/app/ui/fonts'
import Image from 'next/image'
import { useState } from 'react'
import quizzes from './data.json'

export default function Quiz({theme, topic, onClick}:any) {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
    const [isQuizCompleted, setIsQuizCompleted] = useState(false)

    const quiz = topic ? (quizzes.quizzes.filter((quiz) => quiz.title === topic)[0].questions) : ([{question: '', options: [], answer: ''}])
    

    const { question, options, answer } = quiz[questionNumber]
    const optionLetters = ["A", "B", "C", "D"]


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
    
    function handleQuizButton() {
        isAnswerSubmitted ? (nextQuestion()) : submitAnswer()
    }
    
    function finalizeQuiz() {
        setIsQuizCompleted(true)
        setQuestionNumber(0)
        setSelectedAnswer('')
        setIsAnswerSubmitted(false)
    }

    function playAgain() {
        onClick('')
        setIsQuizCompleted(false)
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

    return ((!topic && !isQuizCompleted) ? ( <QuizIntro /> ) : isQuizCompleted ? (<GameOver/>) : (<QuizQuestions />))

    function QuizIntro() {
        return <div className="pt-16 md:pt-0 xl:grid xl:grid-cols-2 w-5/6 m-auto">
            <div>
                <h1 className={`${rubik.className} heading-l text-${theme}`}>Welcome to the</h1>
                <h2 className={`${rubik.className} heading-l-bold text-${theme}`}>Frontend Quiz!</h2>
                <p className={`${rubik.className} body-s s-text-${theme} mt-4 md:mt-16`}>Pick a subject to get started.</p>
            </div>
            <div className='grid gap-y-3 md:gap-y-6'>
                {topics.map(topic => 
                    <button className={`flex w-full p-3 xl:p-5 btn btn-${theme} `} key={topic.code} onClick={() => onClick(topic)}>
                        <Image
                            src={`/icon-${topic.code}.svg`}
                            width={40}
                            height={40}
                            alt='html'
                            className={`icon-topic icon-${topic.code}`}
                        />
                        <span className={`${rubik.className} ml-4 md:ml-8 heading-s text-${theme}`}>{topic.screen}</span>
                    </button>
                )}
            </div>
        </div>
    }

    function QuizQuestions() {
        return <div className="pt-16 md:pt-0 grid grid-cols-1 xl:grid-cols-2 w-5/6 m-auto">
        <div className='xl:w-3/4 grid grid-cols-1 justify-between'>
            <div>
                <p className={`${rubik.className} body-s s-text-${theme} mt-4 md:mt-16`}>{`Question ${questionNumber + 1} of 10.`}</p>
                <h1 className={`${rubik.className} heading-m text-${theme}`}>{question}</h1>
            </div>
            <div className={`w-100 p-1 mt-6 mb-10 xl:mb-0 progress-bar progress-bar-${theme}`}>
                {/* On each increment of questionNumber, progress bar goes up 10% as there are 10 questiosn in list of questions  */}
                <div className={`progress-bar-fill custom-w-${questionNumber}`}></div>
            </div>
        </div>
        <div className='grid gap-y-3 md:gap-y-6' >
            {options.map((option, index) => 
                <AnswerButton option={option} index={index} key={index}/>
            )}
        </div>
        {selectedAnswer ?
            (<button className={`${rubik.className} xl:col-start-2 col-span-1 mt-3 md:mt-8 h-12 md:h-24 btn-submit heading-s`} onClick={handleQuizButton}>{isAnswerSubmitted ? "Next Queston" : "Submit Answer"}</button>) :
            (<></>)
        }
    </div>
    }

    function GameOver() {
        
        let screenTopic
        switch(topic) {
            case ('html'):
                screenTopic = 'HTML'
                break
            case ('css'):
                screenTopic = 'CSS'
                break
            case ('js'):
                screenTopic = 'JavaScript'
                break
            case ('accessibility'):
                screenTopic = 'Accessibility'
                break
        }

        return <div className="pt-16 md:pt-0 xl:grid xl:grid-cols-2 w-5/6 m-auto">
            <div>
                <h1 className={`${rubik.className} heading-l text-${theme}`}>Quiz completed</h1>
                <h2 className={`${rubik.className} heading-l-bold text-${theme}`}>You scored...</h2>
            </div>
            <div className=''>
                <div className={`grid justify-items-center p-8 md:p-12 score-${theme}`}>
                    <div className='flex'>
                        <Image
                            src={`/icon-${topic}.svg`}
                            width={40}
                            height={40}
                            alt={topic}
                            className={`icon-topic icon-${topic} inline m-auto`}
                        />
                        <span className={`${rubik.className} heading-s text-${theme} m-auto ml-6`}>{screenTopic}</span>
                    </div>
                <p className={`${rubik.className} text-${theme} mt-4 mb-4 md:mt-10 text-display`}>
                    {score}
                </p>
                <p className={`${rubik.className} s-text-${theme} text-lg md:text-2xl`}>out of 10</p>
                </div>
                <button className={`${rubik.className} mt-3 md:mt-8 w-full h-12 md:h-24 btn-submit heading-s`} onClick={playAgain}>Play Again</button>
            </div>
        </div>
    }

    function AnswerButton({option, index}:any) {
        // Answer option with no activity, this is how each answer is displayed before the user's interaction
        const selectionIdle = <button
            className={`flex w-full p-3 xl:p-5 btn btn-${theme}`}
            key={index}
            onClick={() => setSelectedAnswer(option)}>
            <div className={`grid justify-items-center flex-none  w-10 h-10 md:w-14 md:h-14 option-icon heading-s`}>
                {optionLetters[index]}                                
            </div>
            <span className={`${rubik.className} ml-4 md:ml-8 m-auto heading-s text-left text-${theme}`}>{option}</span>
        </button>

        // This is how an answer is displayed after the user has selected it
        const selectionActive = <button
            className={`flex w-full p-3 xl:p-5 selected-answer btn-${theme}`}
            key={index}
            onClick={() => setSelectedAnswer(option)}>
            <div className={`grid justify-items-center flex-none  w-10 h-10 md:w-14 md:h-14 option-icon option-icon-selected heading-s`}>
                {optionLetters[index]}                                
            </div>
            <span className={`${rubik.className} ml-4 md:ml-8 m-auto heading-s text-left text-${theme}`}>{option}</span>
        </button>

        // Correct answer selected by the user after answer submission
        const selectionCorrect = <button
            className={`flex w-full p-3 xl:p-5 correct-answer btn-${theme}`}
            key={index}
            onClick={() => setSelectedAnswer(option)}>
            <div className={`grid justify-items-center flex-none  w-10 h-10 md:w-14 md:h-14 option-icon option-icon-correct heading-s`}>
                {optionLetters[index]}                                
            </div>
            <span className={`${rubik.className} ml-4 md:ml-8 m-auto heading-s text-left text-${theme}`}>{option}</span>
            <Image src={'icon-correct.svg'} width={30} height={30} alt='correct answer' className='m-auto mr-0'/>
        </button>

        // How the correct answer is displayed after submission if user chooses the wrong answer
        const correctAnswer = <button
            className={`flex w-full p-3 xl:p-5 btn btn-${theme}`}
            key={index}
            onClick={() => setSelectedAnswer(option)}>
            <div className={`grid justify-items-center flex-none  w-10 h-10 md:w-14 md:h-14 option-icon heading-s`}>
                {optionLetters[index]}                                
            </div>
            <span className={`${rubik.className} ml-4 md:ml-8 m-auto heading-s text-left text-${theme}`}>{option}</span>
            <Image src={'icon-correct.svg'} width={30} height={30} alt='correct answer' className='m-auto mr-0'/>
        </button>

        // How the user chosen answer is displayed after submission if the answer is incorrect
        const selectionIncorrect = <button
            className={`flex w-full p-3 xl:p-5 incorrect-answer btn-${theme}`}
            key={index}
            onClick={() => setSelectedAnswer(option)}>
            <div className={`grid justify-items-center flex-none  w-10 h-10 md:w-14 md:h-14 option-icon option-icon-incorrect heading-s`}>
                {optionLetters[index]}                                
            </div>
            <span className={`${rubik.className} ml-4 md:ml-8 m-auto heading-s text-left text-${theme}`}>{option}</span>
            <Image src={'icon-incorrect.svg'} width={30} height={30} alt='incorrect answer' className='m-auto mr-0'/>
        </button>

        switch(true) {
            case (isAnswerSubmitted && option === selectedAnswer && selectedAnswer === answer):
                return selectionCorrect
            case (isAnswerSubmitted && option !== selectedAnswer && option === answer):
                return correctAnswer
            case (isAnswerSubmitted && option === selectedAnswer && selectedAnswer !== answer):
                return selectionIncorrect
            case (!isAnswerSubmitted && option === selectedAnswer):
                return selectionActive
            default:
                return selectionIdle
        }

    }
}



