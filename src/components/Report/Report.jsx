import React from 'react'
import './Report.css'

function Report() {
    console.log('logged');
return (
    <section className="Report-list">
        <div className="container">
           <div className="report-body">
           <div className="heading">
           <h1>SourceName</h1>
           <i>Username</i>
           </div>
           <div className="date">
            <p>01/02/2023 12:10pm</p>
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptatem dolore soluta vitae, facere amet? Doloribus, vero nostrum magnam officia exercitationem voluptatem sequi sit. A laudantium consequatur corrupti quis tempore.</p>
           <div className="btn">
            <button className='warn'>Warning</button>
            <button className='action'>Action</button>
           </div>
           </div>
        </div>
    </section>
)
}

export default Report