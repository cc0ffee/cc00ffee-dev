import Card from './components/Card';
import NavBar from './components/Navbar';
// import Home from './pages/Home';
import Projects from './pages/Projects';
import Writeups from './pages/Writeups';
// import Photography from './pages/Photography';
import { Route, Routes } from 'react-router-dom';

function App() {
  return <div className="flex flex-col items-center m-6 sm:m-0 dark:bg-neutral-900 text-white">
    <Card/>
    <NavBar/>
    <div>
      <Routes>
        <Route path="/" element={<Projects/>}/>
        <Route path="/writeups" element={<Writeups/>}/>
      </Routes>
    </div>
  </div>
}
export default App;