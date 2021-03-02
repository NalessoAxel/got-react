import React, { Component } from 'react'

class App extends Component {
  state = {     // on definit un state
    name:  {}
  }

  //Methods une fois que notre comoponent a ete monter il va executer cette methods

  componentDidMount() {
    fetch('https://anapioficeandfire.com/api/characters/583')
    .then((response)=> { //function call back 
      return response.json() // recup les données en JSON fromat  
      })
      .then((result)=>{
        this.setState({name: result})   //this fait reference au component
      })
  }
   
           
  render() {
        return (
          <div className="App">
            <h1>Some infos about the GOT books</h1>
            {this.state.name.titles}
            <li>
            {this.state.name.aliases}
            </li>
          </div>
        )
  }
}

export default App;
 