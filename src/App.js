import React from 'react';
import Split from './composition/Split';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstName : "Daniel",
      lastName : "Di Venere",
      leftContent : "This is the content of the left split component!",
      rightContent : "This is the content of the right split component!"
    }

    //this.changeName2 = this.changeName2.bind(this);
  }

  changeName = (event) => {

    event.preventDefault();

    this.setState({
      leftContent : "Text changed!",
      rightContent : "Text changed as well!"
    });
  }

  changeName2(event){
    event.preventDefault();

    this.setState({
      leftContent : "Text changed!",
      rightContent : "Text changed as well!"
    });
  }

  render(){
    return (
      <main className="App">
        <div className="main-container">
          <div className="left-side">
            <Split className="left" 
                  content={this.state.leftContent}
                  changeName2={(event) => this.changeName2(event)}
                  num={10}/>
          </div>
          <div className="right-side">
            <Split className="right" 
                  content={this.state.rightContent}
                  changeName={this.changeName}
                  num={1} /> 
          </div>
          {/*<button onClick={this.changeName}> A different button </button>*/}
        </div>
      </main>
    );
  }
}

export default App;
