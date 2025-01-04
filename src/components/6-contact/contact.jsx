import './contact.css';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div>
        <h3> <i className='icon-mail'></i>Contact me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sunt aperiam est debitis placeat!</p>
      </div>
      <div className="contact-content flex">
        <form className=''>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className='message flex'>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={6} required/>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className=" icon">
          <img src="/public/80750.png" alt="" /> 
        </div>
      </div>
      
    </div>
  )
} 

export default Contact
