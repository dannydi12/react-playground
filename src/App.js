import React from 'react';
import Split from './composition/Split';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listOfDogs : [],
      baseURL : "https://dog.ceo/api/breed/"
    }
  }

  updateListOfDogs = ( dogList ) => {
    const allDogs = dogList.message.map( dogUrl => {
      return {url : dogUrl}
    });

    console.log( allDogs );

    this.setState({
      listOfDogs: allDogs
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log( event );
    console.log( event.target );
    console.log( event.target.dogbreed );
    console.log( event.target.dogbreed.value );

    const breed = event.target.dogbreed.value;
    const url = `${this.state.baseURL}${breed}/images`;
    fetch( url )
      .then( response => {

        if( response.ok ){
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then( responseJSON => {
        console.log( responseJSON );
        this.updateListOfDogs( responseJSON );
      })
      .catch( err => {
        console.log(err);
        this.setState({
          listOfDogs: []
        })
      })

  }

  displayResults = () => {

    console.log( "Length", this.state.listOfDogs.length )
    if( this.state.listOfDogs.length === 0){
      return (<li> No images found! Type a valid breed</li>);
    }
    else{
      return this.state.listOfDogs.map( (dog, index) => {
        return (<li key={index}>
                  <img src={dog.url} />
                </li>)
      })
    }
  }

  render(){
    return (
      <main className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="dog-breed"> Type a dog breed</label>
          <input type="text" name="dogbreed" id="dog-breed"/>
          <button type="submit"> Find a dog image</button>
        </form>

        <ul className="js-results">
          {this.displayResults()}
        </ul>
      </main>
    );
  }
}

export default App;
