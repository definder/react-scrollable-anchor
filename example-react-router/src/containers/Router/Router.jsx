import React from 'react'
import {BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom'
import {hot} from 'react-hot-loader'
import GradientColor from '../../components/GradientColor/GradientColor'
import SingleColor from '../../components/SingleColor/SingleColor'
import {changeHash as changeHashScrollableAnchor} from '../../../../src'


const routes = [
  {
    path: '/gradient-color',
    component: GradientColor,
  },
  {
    path: '/single-color',
    component: SingleColor,
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes}/>
    )}
  />
);

class _App extends React.Component {

  constructor(props) {
    super(props);
    props.history.listen(() => {
      changeHashScrollableAnchor()
    })
  }

  render() {
    return (
      <div>
        <ul className="menu">
          <li className="menu_item">
            <Link to="/gradient-color">Gradient color</Link>
          </li>
          <li className="menu_item">
            <Link to="/single-color">Single color</Link>
          </li>
        </ul>
        {this.props.children}
        <ul className="menu">
          <li className="menu_item">
            <Link to="/gradient-color">Gradient color</Link>
          </li>
          <li className="menu_item">
            <Link to="/single-color">Single color</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const App = withRouter(_App)

const RouteConfig = () => (
  <Router>
    <App>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </App>
  </Router>
);

export default hot(module)(RouteConfig)
