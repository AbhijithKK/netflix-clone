
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {  IMG_URL,BASE_URL,API_KEY } from '../../credentials/Credentials'
import Axios from '../../Axios/Axios'
import Youtube from 'react-youtube'
function RowPost(props) {
    const [Rowpost1, setRowpost] = useState([])
    const [Youtubes, setYoutube] = useState([])
    
    useEffect(() => {
        
        Axios.get(props.url).then((resp) => {

            setRowpost(resp.data.results)
        })


    },[props.url] )
   
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
    }
    const videoplay=(id)=>{
        Axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((resp)=>{
            if(resp.data.results.length!==0){
            setYoutube(resp.data.results[0])
            }
        })
    }
    
    return (

       <div className='row'>
            
            <h2 >{props.title}</h2>
            <div className='posters'>
           {
           
            Rowpost1.map((data,ind)=>
           
                <img  onClick={()=>videoplay(data.id)} key={ind} className={props.isSmall ? 'sPoster' : 'poster'} alt='poster' src={IMG_URL+data.backdrop_path} />
            )
        }
            </div>
           {Youtubes.key ? <Youtube opts={opts} videoId={Youtubes.key} /> : ''}
        </div>
        
          
    )
}

export default RowPost;
