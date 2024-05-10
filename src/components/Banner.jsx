import { useState } from "react";
import instance from "../instance";
import { useEffect } from "react";
import './Banner.css'

function Banner({fetchUrl}){
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie,setMovieBanner] = useState();
    const fetchData = async()=>{
        const {data} = await instance.get(fetchUrl);
        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <>
        <div style={{height:"700px",width:"100%",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundSize:"cover",backgroundImage:`url(${base_url}${movie?.backdrop_path})`}}>
            <div className="banner_content">
                <h1>{movie?.name}</h1>
                <button className="btn btn-danger">Play  <i class="fa-solid fa-play bg-transparent"></i></button>
                <button className="btn border-white ms-3 more">More Info <i class="fa-solid fa-caret-down bg-transparent ms-2"></i></button>
                <h4>{movie?.overview?.slice(0,200)}...</h4>
            </div>
        </div>
        
        </>
    )
}
export default Banner;