React = require('react')

var App = module.exports = React.createClass({
  render: function() {
    return <h1>
            <i className="fa fa-home"></i>
            Hello, {this.props.username}!
            </h1>
  }
})
