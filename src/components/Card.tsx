import PFP from '../assets/pfp.png';
import { useState } from 'react';
function Card() {

    let indexNum = 0;
    let locIndexNum = 0;
    const userArray: string[] = ["cc00ffee!", "0xCC00FFEE!", "3422617582!", "sizeof(cc00ffee)!", 'echo "cc00ffee!"'];
    const locationArray: string[] = ["Chicago!", "41°52′55″N 87°37′40″W!", "The Windy City!"]
    const [index, setIndex] = useState<number>(0);
    const [locIndex, setLocIndex] = useState<number>(0);
    function handleUserFormat() {
        indexNum += 1;
        setIndex((index + 1) % userArray.length);
    }
    function handleLocFormat() {
        locIndexNum += 1;
        setLocIndex((locIndex + 1) % locationArray.length);
    }

    return <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-16'>
        <img className='rounded-lg size-40 sm:mb-0 mb-12' src={ PFP }/>
        <div>
            <h1 className="text-3xl font-bold">Hi! I'm <button onClick={ handleUserFormat }><code className="bg-gray-100 dark:bg-gray-600 p-1 rounded">{ userArray[index] }</code></button></h1>
            <br/>
            <p className="text-xl font-semibold">I study Computer Science in 🏙️<button onClick={ handleLocFormat }><code className="bg-gray-100 dark:bg-gray-600 p-1 rounded">{ locationArray[locIndex] }</code></button><br/>I love playing CTFs! You can view my writeups here.</p>
            <div className="flex items-start space-x-8 mt-4 font-medium">
                <span>Discord: cc00ffee</span>
                <a href="https://twitter.com/_cc00ffee">Twitter</a>
                <a href="https://github.com/cc0ffee">GitHub</a>
            </div>
        </div>
    </div>
}
export default Card;