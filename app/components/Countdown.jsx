var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});
// var Countdown = () => {
//   return (
//     <div>
//       render Countdown.jsx
//       <Clock totalSeconds={129}/>
//     </div>
//   );
// }

 module.exports = Countdown;
