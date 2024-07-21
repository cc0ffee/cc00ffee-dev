import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    const [selected, setSelected] = useState<'home' | 'writeups'>('home');
    return <div className="flex justify-start w-full max-w-3xl border-b-2 border-gray-100 px-4 ">  
            <Link to="/"
                onClick={() => setSelected('home')}
                className={`mt-4 px-4 py-2 ${selected === 'home' ? ' bg-gray-100 text-black' : 'text-black'}`}>
                Projects →
            </Link>
            <Link to="/writeups"
                onClick={() => setSelected('writeups')}
                className={`mt-4 px-4 py-2 ${selected === 'writeups' ? 'bg-gray-100 text-black' : 'text-black'}`}>
                Writeups →
            </Link>
        </div>
}
export default Navbar;