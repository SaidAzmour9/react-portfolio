import './header.css';

import { useState } from 'react';

function Header() {
  const [showModal, setShowModal] = useState(false); 
  return (
    <header className='border flex'>
      <div>
      <button onClick={()=>{
        setShowModal(true);
      }} className='menu'>SHow modal</button>
      </div>
      <nav>
        <ul className='flex'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>

        </ul>
      </nav>
      <button>light</button>
    {showModal &&(
      <div className="fixed">
        <ul className='modal'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
    </div>
    )}
    </header>
  )
}

export default Header;
