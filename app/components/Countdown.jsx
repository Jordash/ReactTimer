var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  //componentDidUpdate gets called after either props or state gets updated
  //takes two arguments: previous props, and previous state
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started': this.startTimer();
        break;
        case 'stopped': this.setState({count: 0});
        case 'paused': clearInterval(this.timer)
         this.timer = undefined;
        break;
      }
    }
  },
  componentWillUpdate: function(nextProps, nextState) {

  },
  //componentWillMount fires as compoent is first mounted (just before it displays on screen)
  //does not have access to the refs, nor the DOM
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  //componentDidMount fires right after everything is rendered in the DOM
  componentDidMount: function() {
    console.log('componentDidMount');
  },
  //componentWillUnmount fires right before a component is removed from the DOM
  componentWillUnmount: function() {
    //console.log('componentWillUnmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function() {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      //set state to value passed in (seconds)
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
    //  return countdownStatus;
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }
      else {
        {/* Pass onSetCountdown function to child component (CountdownForm) as prop */}
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return (
      <div>
      <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

 module.exports = Countdown;
