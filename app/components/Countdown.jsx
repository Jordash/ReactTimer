var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      //set state to value passed in (seconds)
      count: seconds
    });
  },
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        {/* Pass onSetCountdown function to child component (CountdownForm) as prop */}
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

 module.exports = Countdown;
