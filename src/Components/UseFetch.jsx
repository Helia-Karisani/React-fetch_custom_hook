import {useState, useEffect } from "react";

// function for custon hook

const useFetch = (url) => {
    const[data,setData]=useState();

    useEffect(()=>{
        fetch(url).then((res)=>res.json()) //fetch(url): This initiates an HTTP request to the specified url.
        // store the parsed data into React state
        .then((data)=>setData(data))
    },[])
  return [data]
}

export default  useFetch
