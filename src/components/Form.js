import React from "react";

class Form extends React.Component{
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholde="City..." />
        <input type="text" name="country" placeholde="Country..." />
        <button>Get Weather</button>
      </form>
    )
  }
};

export default Form;