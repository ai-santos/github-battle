var React = require('react');
var ReactDOM = require('react-dom');

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}

export default Label