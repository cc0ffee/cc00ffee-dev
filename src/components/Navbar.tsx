import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    const [selected, setSelected] = useState<'home' | 'writeups'>('home');
    return <div className="flex justify-start w-full max-w-3xl border-b-2 border-gray-100 dark:border-gray-600  px-4 ">  
            <Link to="/"
                onClick={() => setSelected('home')}
                className={`mt-4 px-4 py-2 ${selected === 'home' ? ' bg-gray-100 dark:bg-gray-600 text-black dark:text-white' : ' dark:bg-gray-800 text-black dark:text-white'}`}>
                Projects →
            </Link>
            <Link to="/writeups"
                onClick={() => setSelected('writeups')}
                className={`mt-4 px-4 py-2 ${selected === 'writeups' ? ' bg-gray-100 dark:bg-gray-600 text-black dark:text-white' : ' dark:bg-gray-800 text-black dark:text-white'}`}>
                Writeups →
            </Link>
        </div>
}
export default Navbar;