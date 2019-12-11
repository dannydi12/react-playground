import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('component did mount');
    this.interval = setInterval(() => {
      // console.log('interval');
      this.setState({
        dateTime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('unmount');
    clearInterval(this.interval);
  }
  
  render() {
    // console.log('render');
    return (
      <div><p>{this.state.dateTime.toLocaleString()}</p></div>
    );
  }
}

export default TheDate;