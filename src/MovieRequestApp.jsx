import React, {useEffect, useState} from 'react';

const MovieRequestApp = ({movieName}) => {
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState("");
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(()=>{
        setPageNo(1);
        setData("");
        setImageUrl(null);
    }, [movieName]);

    useEffect(()=>{
        if(movieName === "")  return;

        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=36016f17553c8a413484c1aec353bc94&page=${pageNo}`;
        fetch(url)
        .then(response => response.json())
        .then((jsonData)=>{
            for(let i=0; i< jsonData.results.length; i++) {
                const movieObjName = jsonData.results[i].name || jsonData.results[i].title;
                if(movieObjName.toLowerCase().replace(/\s/g,'') == movieName) {
                    setData(jsonData.results[i]);
                    return;
                }
            }
            if(pageNo<=500) {
                setPageNo(currPageNo=>currPageNo+1);
            };    
        })
        .catch((err)=>console.error(err));
    }, [movieName, pageNo]);

    console.log("Rendering");
    useEffect(()=>{
        setImageUrl(`https://image.tmdb.org/t/p/w500${data.poster_path}`);   
    }, [data]);

    return (
        <div className='movie-card'>
            <img src={imageUrl} alt="Movie image"/>            
            <div><span>Title:</span> {data.title || data.name}</div>
            <p><span>OverView:</span> {data.overview}</p>
            <p><span>Release Date:</span> {data.release_date}</p>
        </div>
    );
} 

export default MovieRequestApp;