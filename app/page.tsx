
import { BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'
function HomePage() {
  return (
    <div className='flex  flex-col items-center justify-center h-screen  px-2 text-white '>
        <h1 className='text-4xl font-bold mb-20 '>ChatGpt-Next</h1>
        <div className='flex space-x-2 text-center '>
            <div>
                <div className='flex flex-col items-center justify-center mb-5 '>
                <SunIcon className="h-8 w-8 text-white-500"/>
                <h1 >Example</h1>
                </div>
                <div className='space-y-2' >
                <p className='infoText'> What is the colour of sky</p>
                <p className='infoText'> What is  chatgpt and chatgpt-next</p>
                <p className='infoText'>Where Mangalam College</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                <BoltIcon className="h-8 w-8 text-white-500"/>
                <h1 >Capabilities</h1>
                </div>
                <div className='space-y-2' >
                <p className='infoText'> Added user information</p>
                <p className='infoText'>Select  models for chatGPT-Next</p>
                <p className='infoText'>Any text based queries</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                <ExclamationTriangleIcon  className="h-8 w-8 text-white-500"/>
                <h1 >Limitations</h1>
                </div>
                <div className='space-y-2' >
                <p className='infoText'>Sometimes wrong answer</p>
                <p className='infoText'>Trained with data upto 2021</p>
                <p className='infoText'>Denies inappropriate queries</p>
                </div>
            </div>
            
            

        </div>
        <p className='text-xs text-gray-400 hidden md:inline mt-5 animate-pulse'>ChatGPT-Next 1.0 :Created By Students of Mangalam College Of Engineering Ettumanoor</p>
    </div>
  )
}

export default HomePage