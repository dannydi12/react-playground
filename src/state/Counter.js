import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  }

  static defaultProps = {
    step: 1
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + this.props.step
    });
    // console.log('props in handleButtonClick', this.props)
    // console.log('state in handleButtonClick', this.state)
  }

  render() {
    return (
      <div>
        <p>The current count is {this.state.count}</p>
        <button onClick={this.handleButtonClick}>++</button>
      </div>
    );
  }
}

export default Counter;