import './hero.css';

function Hero() {
  return (
    <div className='Hero container' id='home'>
      <div className='Hero__container'>
        <div className='Hero__content'>
            <span className=''>Hello, I am </span>
              <h1 className=''>Said <br /> Azmour</h1>
              <p>A passionate full stack developer from Morocco</p>
              <div>
                <span>Find me on</span>
                <ul className='flex links'>
                  <li><a href='#' className='icon-twitter'></a></li>
                  <li><a href='#' className='icon-instagram'></a></li>
                  <li><a href='#' className='icon-github'></a></li>
                  <li><a href='#' className='icon-linkedin'></a></li>
                </ul>
              </div>
              <a href="#about" ><i className='icon-keyboard_arrow_up top-animation'></i></a>
        </div>
        

        
        <img src="/637.png" alt=""  className='pers-img'/>
        
          {/* <span className=''>Hi, im Said &#128075;</span>
          <h1 className=''>Fullstack web developer</h1>
          <p>A passionate <span>Fullstack</span> web developer from <span>Morocco</span> I code beautifully simple things, and I love what I do.</p>
        <ul className='flex links'>
          <li><a href='#' className='icon-twitter'></a></li>
          <li><a href='#' className='icon-instagram'></a></li>
          <li><a href='#' className='icon-github'></a></li>
          <li><a href='#' className='icon-linkedin'></a></li>
        </ul>
        <a href="#about" ><i className='icon-keyboard_arrow_up top-animation'></i></a>
      </div>  */}
      </div>

    </div>
    
  )
}

export default Hero;
