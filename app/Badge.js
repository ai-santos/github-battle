var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

var Avatar = require('./Avatar.js')
var Label = require('./Label.js')
var ScreenName = require('./ScreenName.js')

class Badge extends React.Component {
  render() {
    return(
      <div>
        <Avatar img={this.props.user.img}/>
        <Label name={this.props.user.name}/>
        <ScreenName username={this.props.user.username}/>
      </div>
    )
  }
}

export default Badge

