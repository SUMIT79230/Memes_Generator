import React from 'react'
import './Random.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';



const API_KEY = 'kWA77xNLjlcCB557kvXd6sJwsgTKDgB3';

function Random() {


    const [memes,setMemes] = useState('');
    const [loading,setLoading] = useState(false);


    async function fetchData()
    {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url); //desturture data form api
        const imgSource = data.data.images.downsized_large.url;
        setMemes(imgSource);
        setLoading(false);
    }

    useEffect( ()=>{
       fetchData(); 
    },[] );

    function clickHandler()
    {
       fetchData();
    }

  return (
    <div>
        <div className = "Component_1"> 

        <h1 className='heaadng_1'> Random Memes Generator</h1>
        {
            loading ? <Spinner /> : ( <img src ={memes} width="450" alt="memes"></img>)
        }
       
        <button onClick={clickHandler} className = "generate_btn">Generate Memes</button>

        </div>
    </div>
  )
}
export default Random