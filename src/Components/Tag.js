import React from "react";
import "./Random.css";
import "./Tag.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = "kWA77xNLjlcCB557kvXd6sJwsgTKDgB3";

function Tag() {
  const [tag, setTag] = useState("");
  const [memes, setMemes] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url); //desturture data form api
    const imgSource = data.data.images.downsized_large.url;
    setMemes(imgSource);
    setLoading(false);
  }

  useEffect(() => {
    if (tag) {
      fetchData();
    }
  }, [tag]);

  function clickHandler() {
    fetchData();
  }

  return (
    <div>
      <div className="Component_2">
        <h1 className="heaadng_1"> User's : {tag} Memes</h1>
        {loading ? <Spinner /> : <img src={memes} width="450"></img>}

        <input
          onChange={(event) => setTag(event.target.value)}
          className="text_input"
          placeholder="Enter memes"
          value={tag}
          marign-top="5px"
        />

        <button onClick={clickHandler} className="generate_btn">
          Generate Memes
        </button>
      </div>
    </div>
  );
}

export default Tag;
