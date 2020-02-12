import React,{useState,useEffect} from 'react'
import axios from 'axios'
import HomePageComponent from './HomePageComponent'
import '../Home/HomePage.css'

function HomePage() {
    const[posts,setPosts]= useState([])
    const[err,setErr]=useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp=>{console.log(resp)
                    setPosts(resp.data)})
        .catch(error=>{
            console.log(error)
            setErr('error retrieving data!')
            })
                    
    
    },[])
   
    return (
        <div>          
                {                   
                    posts.length ? posts.map(post=><HomePageComponent key={post.id} posts ={post}/>): null                                      
                }
                {
                    err ? <div>{err}</div>:null
                }                      
        </div>
    )
}

export default HomePage
