import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Images.css'
import Imagescomponent from './Imagescomponent'


function Fruits() {
    const[posts,setPosts]= useState([])
    const[err,setErr]=useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
        .then(resp=>{console.log(resp)
                    setPosts(resp.data)})
        .catch(error=>{
            console.log(error)
            setErr('error retrieving data!')
            })
                    
    
    },[])
   
    return (
        <div className='Api-component-Images'>          
                {                   
                    posts.length ? posts.map(post=><Imagescomponent key={post.id} posts ={post}/>): null                                      
                }
                {
                    err ? <div>{err}</div>:null
                }                      
        </div>
    )
}

export default Fruits