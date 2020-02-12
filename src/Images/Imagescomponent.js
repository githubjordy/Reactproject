import React from 'react'

function Imagescomponent(props) {
    //console.log(props)
    return (
  
        
        <div className='Imagescomponent'>
            <img className='Imagesimage' src={props.posts.url} alt='something went wrong!'></img>
            
        </div>
    )
}

export default Imagescomponent