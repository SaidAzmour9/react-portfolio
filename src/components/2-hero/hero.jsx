import './hero.css';

function Hero() {
  return (
    <div className='Hero' id='home'>
      <div className='Hero__container'>
        <img src="/80750.png" alt="" />
          <span className=''>Hi, im Said &#128075;</span>
          <h1 className=''>Fullstack web developer</h1>
          <p>A passionate <span>Fullstack</span> web developer from <span>Morocco</span> I code beautifully simple things, and I love what I do.</p>
        <ul className='flex links'>
          <li><a href='#' className='icon-twitter'></a></li>
          <li><a href='#' className='icon-instagram'></a></li>
          <li><a href='#' className='icon-github'></a></li>
          <li><a href='#' className='icon-linkedin'></a></li>
        </ul>
        <a href="#about" ><i className='icon-keyboard_arrow_up top-animation'></i></a>
      </div> 

    </div>
    
  )
}

export default Hero;
