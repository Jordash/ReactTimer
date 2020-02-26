var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p>Main.jsx Rendered</p>
          {/* this renders the children of the 'Main' component */}
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
