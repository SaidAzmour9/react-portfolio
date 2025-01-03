import './projects.css';

function Projects() {
  return (
      <section className='projects flex'>
        <section className='flex left-section'>
          <button className='active'>all projects</button>
          <button>Frontend projects</button>
          <button>Backend projects</button>
          <button>Full stack</button>

        </section>
        <section className='cards flex'>
          <div className="card">
            <div className="card-img">
              <img src="https://picsum.photos/300/200" alt="Card image cap"/>
              <div className='tags'>
                <span>Html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Project One One</h5>
              <p className="card-text">This is a longer card with supporting This is a longer card with supporting This is a longer card with supporting text below as a natural</p>
              <div className="alinks">
                <a href="#" className='icon-github'></a>
                <a href="#" className='icon-github'></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="https://picsum.photos/300/200" alt="Card image cap"/>
              <div className='tags'>
                <span>Html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Project One One</h5>
              <p className="card-text">This is a longer card with supporting This is a longer card with supporting This is a longer card with supporting text below as a natural</p>
              <div className="alinks">
                <a href="#" className='icon-github'></a>
                <a href="#" className='icon-github'></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="https://picsum.photos/300/200" alt="Card image cap"/>
              <div className='tags'>
                <span>Html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Project One One</h5>
              <p className="card-text">This is a longer card with supporting This is a longer card with supporting This is a longer card with supporting text below as a natural</p>
              <div className="alinks">
                <a href="#" className='icon-github'></a>
                <a href="#" className='icon-github'></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="https://picsum.photos/300/200" alt="Card image cap"/>
              <div className='tags'>
                <span>Html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Project One One</h5>
              <p className="card-text">This is a longer card with supporting This is a longer card with supporting This is a longer card with supporting text below as a natural</p>
              <div className="alinks">
                <a href="#" className='icon-github'></a>
                <a href="#" className='icon-times'></a>
              </div>
            </div>
          </div>
          
        </section>
      </section>
  )
}

export default Projects 