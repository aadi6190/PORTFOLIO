import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png' 
import Vector1 from '../../img/Vector1.png'  
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/0bc394e3-95bb-447e-ab9f-1f9d4ec9a2a6-removebg-preview.png' 
import thumbup from '../../img/thumbup.png'  
import Crown from '../../img/crown.png'
import glassesimoji from'../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv' 






function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey I Am </span>
                    <span>Aadesh Singh </span>
                    <span>Front-End React developer passionate about crafting user-centric interfaces, optimizing performance, and collaborating in diverse teams.</span>
                   
                </div>
                <button className="button i-button">
                    Hire me
                </button>
                <div className="i-icon">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>

            </div>

            <div className="i-right">
                <img src={Vector1}alt="" />
                <img src={Vector2}alt="" />
                <img src={boy}alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%',left:'90%'}}
                className='floating-div'>

                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
                </div>
               <div style={{top:'18.38rem',left:'0.265rem'}}>
               <FloatingDiv image={thumbup} txt1="Web Devloper" txt2=" "/>

               </div>

            </div>
        </div>
    )
}

export default Intro
