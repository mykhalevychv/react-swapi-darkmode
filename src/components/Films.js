import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

function FilmListItem ({url, id,personId}) {
const [film, setFilms] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(res => {
         setFilms(res.data);
         console.log(res.data);
      }).catch(console.log);
  }, [url, setFilms]);
 if (!film) return <div>...</div>;
    return (
      <div>
    <Link to={`/${personId}/${id}/`} >
      <div>{film.title}</div>
    </Link></div>
  );
}

export default function Films ({personId, urls}) {
  const toFilm = useCallback((url, index) => {return (<FilmListItem personId={personId} 
  key={url} id={index + 1} url={url} />); },[personId]);
  return (    
   urls.map(toFilm)
  );
}