var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css')

// state
// lifecycle event
// UI

class Badge extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name} </h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}


ReactDOM.render(<Badge
  name="Tyler"
  username="tylermcginnis"
  img={'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}

  />, document.getElementById('app'));