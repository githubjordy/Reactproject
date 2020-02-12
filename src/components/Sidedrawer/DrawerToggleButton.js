import React,{useContext} from 'react'
import './DrawerToggleButton.css'
import {SidedrawerContext} from '../../App'


function DrawerToggleButton(){
    const Parentonclickfunction = useContext(SidedrawerContext)
   // console.log(UseContext(UserContext))

    return(
   /* <UserContext.Consumer>{user=>{return <h1>user is {user}</h1>}}</UserContext.Consumer>*/

   // <h1>this is user {user}</h1>
    <button className="toggle-button" onClick={Parentonclickfunction} >
     <div className="toggle-button__line"/>   
     <div className="toggle-button__line"/> 
     <div className="toggle-button__line"/>      
         
    </button>  ) 

}





export default DrawerToggleButton;
