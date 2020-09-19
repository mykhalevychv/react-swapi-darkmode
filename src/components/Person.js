import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Switch, Route, Link, useParams } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import Films from "./Films";
import Film from "./Film";

export default function Person (props) {
  const [person, setPerson] = useState();
  let { personId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
      .then((res) => {
        //console.log(res);
        setPerson(res.data);
      });
  }, [setPerson]);

  if (!person) {
    return <div>Loading...</div>;
  }

  const urls = person.films.map(str => str.replace('http', 'https'));

  return (
      <Switch>
      <Route exact path={`/${personId}/`}>
        <div>
      <Link to="/">Back</Link>
      <div>name: { person.name }</div>
      <div>gender: { person.gender }</div>
      <div>height: { person.height }</div>
      <div>hair: { person.hair_color }</div>
      <div>films: {  }</div>
      <Films personId={personId} urls={urls} />
    </div>
     </Route>
      <Route exact path={`/${personId}/:filmId/`}>
      <Link className='back' to={`/${personId}/`}>Back</Link>
        <Film />
      </Route>

    </Switch>
  );
}