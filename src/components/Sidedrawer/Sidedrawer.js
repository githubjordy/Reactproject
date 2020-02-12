import React,{useContext} from 'react'
import './Sidedrawer.css'
import {Link} from 'react-router-dom'
import {SidedrawerContext} from '../../App'



function Sidedrawer(props){
    const Parentonclickfunction = useContext(SidedrawerContext)
    console.log("the values is")
    console.log(props.show)
    let drawerclasses ='side-drawer';
    if(props.show.Sidedraweropen){
        
        drawerclasses ='side-drawer open';
    }
   return( 
      
       <nav className={drawerclasses}>
        <div className="flexcontainer-nav">
            <h1 className="nav-logo">Our Products</h1>
        <div><ul>
        <Link to='/Images'onClick={Parentonclickfunction}>
        <li className="list__style-nav">Images</li>
        </Link>
        <Link to='/'onClick={Parentonclickfunction}>
        <li className="list__style-nav">Home</li>
        </Link>
        
        
        </ul></div>
        </div>
    </nav>)
    
    
};




export default Sidedrawer;