import './hero.css';

function Hero() {
  return (
    <div className='Hero'>
      <div className='Hero__container'>
        <img src="/80750.png" alt="" />
        <div className='herocontent'>
          <span className=''>Hi, im Said &#128075;</span>
          <h1 className=''>Full stack web developer</h1>
          <p>I code beautifully simple things, and I love what I do.</p>
        </div> 
        <ul className='flex links'>
          <li><a href='#' className='icon-twitter'></a></li>
          <li><a href='#' className='icon-instagram'></a></li>
          <li><a href='#' className='icon-github'></a></li>
          <li><a href='#' className='icon-linkedin'></a></li>
        </ul>
        <button className='icon-keyboard_arrow_up top-animation'></button>
      </div> 

    </div>
    
  )
}

export default Hero;
