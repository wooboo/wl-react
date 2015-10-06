'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router';
import reactTapEventPlugin from 'react-tap-event-plugin';
import mui from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import style from 'style.css!';
import Wishes from './components/Wishes';

let ThemeManager = new mui.Styles.ThemeManager();
reactTapEventPlugin();

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
        <Wishes listId="http://localhost:8080/wishlist/api/MyList/69d30d33-972c-41ac-af11-ab212c9a4c1a" />
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
