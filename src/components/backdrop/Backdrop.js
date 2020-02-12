import React,{useContext} from 'react'
import './Backdrop.css'
import {BackdropContext} from '../../App'

function Backdrop(){

    const parentclickfunction = useContext(BackdropContext)
    console.log("called")
    
    return(
    <div className="backdrop" onClick={parentclickfunction}/>
    )
}




export default Backdrop;