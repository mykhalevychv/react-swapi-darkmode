import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

export default function Film (params) {
  const [film, setFilm] = useState('');
  let { filmId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${filmId}/`)
      .then(res => {
        setFilm(res.data);
        //console.log(res.data);
      }).catch(console.log);
  }, [setFilm, filmId]);
    if (!film) {
    return <div> </div>;
  }
  return (
    <div>
      
      <div>Title: { film.title }</div>
      <div>director: { film.director }</div>
      <div>release date: { film.release_date }</div>
     
    </div>
  );
}

