import axios from 'axios';



import React from 'react';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/pokemons`)
      .then(res => {
        const persons = res.data;
       
      })
  }

  render() {
    
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}