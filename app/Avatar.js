var React = require('react');
var ReactDOM = require('react-dom');

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

export default Avatar