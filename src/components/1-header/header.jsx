import './header.css';

import { useState } from 'react';

function Header() {
  const [showModal, setShowModal] = useState(false); 
  return (
    <header className='flex'>
      <div>
      <button onClick={()=>{
        setShowModal(true);
      }} className='menu icon-menu flex'></button>
      </div>
      <nav>
        <ul className='flex'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>
      <button className='mode flex'>
        <span className='icon-moon-o'></span>
      </button>
    {showModal &&(
      <div className="fixed">
        <ul className='modal'>
          <li>
              <button className='icon-close' onClick={() => {
                setShowModal(false);
              }
              }/>
            </li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
    </div>
    )}
    </header>
  )
}

export default Header;
