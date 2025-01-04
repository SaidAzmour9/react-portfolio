import './index.css';

import Header from './components/1-header/header';
import Hero from './components/2-hero/hero';
import Main from './components/3-main/main';
import Skills from './components/4-skills/skills';
import Projects from './components/5-projects/projects';
import Contact from './components/6-contact/contact';
import Footer from './components/7-footer/footer';

function App() {


  return (
    <div className='container'>
      < Header />
      <div className='divider'></div>
      < Hero/>
      <div className='divider'></div>
      < Main />
      <div className='divider'></div>
      < Skills />
      <div className='divider'></div>
      < Projects />
      <div className='divider'></div>
      < Contact />
      <div className='divider'></div>
      < Footer />
      <button><i className='icon-keyboard_arrow_up anim2top'></i></button>
    </div>
   
  )
}
export default App
