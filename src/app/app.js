'use strict';

import React from 'react';
import MyReactComponent from './MyReactComponent';
import { Router, Route, Link } from 'react-router';
import reactTapEventPlugin from 'react-tap-event-plugin';
import mui from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import style from 'style.css!';

let ThemeManager = new mui.Styles.ThemeManager();
reactTapEventPlugin();
// Then we delete a bunch of code from App and
// // add some <Link> elements...
const App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <AppBar
		  title="Title"
		  iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <h1>App</h1>
        <MyReactComponent name="WooBoo" />
        <RaisedButton label="Hello" />
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
React.render(<App />, document.getElementById('app'));

//React.render(<MyReactComponent name="Piotr" />, document.getElementById('app'));
// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={MyReactComponent}/>
//       <Route path="inbox" component={MyReactComponent}>
//         <Route path="/user/:userId" component={MyReactComponent}/>
//       </Route>
//       <Route path="*" component={MyReactComponent}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'));
