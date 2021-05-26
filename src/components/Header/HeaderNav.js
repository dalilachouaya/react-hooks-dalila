import React from 'react'
import './HeaderNav.css'
import { AiOutlineHome,AiOutlinePlusCircle,AiOutlineStar,AiOutlineMail} from "react-icons/ai";
import {IconContext} from 'react-icons';
const HeaderNav = () => {
        return ( 
            
    <IconContext.Provider value ={{color:"white", size:"1.5em"}}>
            <div className="mystyle">
                <a className="nice" href="#home"> <AiOutlineHome className='hovered'/>Home</a>
                <a className="nice"  href="#add"><AiOutlinePlusCircle/>+ADD</a>
                <a className="nice" href="#rating"><AiOutlineStar/>Rate</a>
                <a className="nice" href="#contact"><AiOutlineMail/>Contact</a>
            </div>
            </IconContext.Provider>
        )
    }

export default HeaderNav
