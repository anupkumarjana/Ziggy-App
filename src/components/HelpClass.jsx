import React from "react";

class HelpClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count2: 2 };
  }

  render() {
    const { count, count2 } = this.state;
    // const handleCount = () => {
    //   count += 1;
    // };
    return (
      <div>
        <h1> count: {count}</h1>
        <h1> count2: {count2}</h1>
        <button
          className="border border-black p-2"
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            })
          }
        >
          +
        </button>
        <button
          className="border border-black p-2"
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
              count2: this.state.count2 - 1,
            })
          }
        >
          -
        </button>

        <h2>Name: {this.props.name}</h2>
        <h2>Loaction: {this.props.location}</h2>
        <h2>Gender: {this.props.gender}</h2>
        <h2>Age: {this.props.age}</h2>
      </div>
    );
  }
}
export default HelpClass;
