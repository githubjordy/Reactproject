import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton'
import {Link} from 'react-router-dom'


const toolbar = props =>(
 
    <header className="toolbar">

        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton/>
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigations-items">
                <ul>
                    <Link to='/Images'>
                     <li>Images</li>
                    </Link>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
)




export default toolbar;
