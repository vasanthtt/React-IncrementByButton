import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Button extends React.Component {
  render() {
    return (
      <button className="App" onClick={this.props.CallClick}>
        Add(+)
      </button>
    );
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 2
    };
  }

  IncrementFun = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <Button CallClick={this.IncrementFun} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
