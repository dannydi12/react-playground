import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  clear = () => clearInterval(this.tick);

  componentDidMount() {
    this.tick = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  boom() {
    if (this.state.count >= 8) {
      this.clear();
      return 'BOOM!!!'
    }
    else if (this.state.count % 2) {
      return 'tick';
    }
    else {
      return 'tock';
    }
  }

  render() {    
    return (
      <div>
        <p>{this.boom()}</p>
      </div>
    );
  }
}


export default Bomb;