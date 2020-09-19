import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router,  Link, Route, useParams } from "react-router-dom";

export default function People () {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
   useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        //console.log(res.data.results);
        setPeople(res.data.results);
      });
  }, [setPeople]);

   const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);
  React.useEffect(() => {
   
    const results = people.filter(p => p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1).map(toPerson)
    setSearchResults(results);
  }, [searchTerm]);
//  <div>{ people.map(toPerson) }    </div>
  return (
    
      <div className="Search">
 <div> Search for characters : </div> 
      <input
        type="text"
        placeholder=" "
        value={searchTerm}
        onChange={handleChange}
      />
      
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
     
    </div>
  );}

function PersonListItem ({name, id}) {
  return (
    <Link to={`/${id}`} key={id}>
      <div>{name}</div>
    </Link>
  );
}
