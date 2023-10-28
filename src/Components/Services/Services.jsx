import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import frontend from'../../img/frontend.png'
import backend from '../../img/backend.png'





const Services = () => {
  return (
   <div className="services">
    <div className="awesome">
       <span> My Awesome</span>
       <span>Services</span>
       <span>
        I Am a freshers 
        <br />
        A frontend developer is a skilled professional who creates user interfaces and designs for websites and applications, using HTML, CSS, and JavaScript. They ensure that the frontend is visually appealing, functional, and user-friendly, optimizing the overall user experience                                                                                                                                                                                               
       </span>
       <button className="button s-button">Resume</button>

    </div>
    <div className="cards">
      <div style={{left: '14rem'}}>
        <Card
        image ={frontend}
        
        heading ={'Frontend'}
        detail ={"Html, Css, JavaScript, React.js, Nextjs, Node.js"}
        />

      </div>
     {/* {second card} */}
     <div className='ca'>
        <Card
        image ={backend}
        
        heading ={'Backend'}
        detail ={"Ad.JavaScript, Nodejs,Express, Frameworks"}
        />

      </div>
    </div>


   </div>
  )
}

export default Services
