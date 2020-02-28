var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  //Create function to take in a number of seconds, then return as formatted string
  formatSeconds: function(totalSeconds) {
    //first break up into seconds and minutes
    var seconds = totalSeconds % 60; //set equal to the remainder of total divided by 60
    var minutes = Math.floor(totalSeconds / 60); //round down to nearest minute

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },
  render: function() {
    {/* get this.props either passed in, or from getDefaultProps above */}
    var {totalSeconds} = this.props;
    return (
    <div className="clock">
      <span className="clock-text">
        {this.formatSeconds(totalSeconds)}
      </span>
    </div>
    );
  }
});

module.exports = Clock;
