import {API_KEY,BASE_URL,IMG_URL} from '../../credentials/Credentials'
import './Banner.css'
import Axios from '../../Axios/Axios';
import { useEffect, useState } from 'react';
function Banner(){
  
    const [movie, movieState] = useState()
    useEffect(() => {
        Axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then((resp)=>{
            
           const random= Math.floor(Math.random() * 20) + 1;
            
            movieState(resp.data.results[random])
            
           
        })
    }, [])
    console.log(movie)// why this print in two times
    
    return(
        <div 
        className='banner' style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path : ''})`}} >
           <div className='content' >
               <h1 className='title'>{movie ? movie.title :''}  </h1>
               <div className='banner_buttons' >
                   <button className='button' >Play</button>
                   <button className='button' >My list</button>
               </div>
               <h1 className='description'>{movie ? movie.overview : ''}</h1>
           </div>
       <div className="fade_bottom"></div>
       </div>
    )
}
export default Banner;