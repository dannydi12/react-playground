import React from "react";

class Accordian extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    currentIndex: null
  };

  handleButtonClick(index) {
    if(index === this.state.currentIndex) {
      this.setState({currentIndex: null});
    }
    else {
    this.setState({currentIndex: index});
    }
  }

  generateList() {
    return this.props.sections.map((list, index) => (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>{list.title}</button>
        {this.state.currentIndex === index && (<p>{list.content}</p>)}
      </li>
    ));
  }

  render() {
    return(
        <ul>
          {this.generateList()}
        </ul>
    )
  }
}

export default Accordian;