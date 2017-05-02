var React = require('react');
var ReactDOM = require('react-dom');

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}

export default ScreenName