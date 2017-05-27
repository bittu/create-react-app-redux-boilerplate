import React, { Component} from 'react';
import { Router, Route, IndexRedirect, useRouterHistory  } from "react-router";
import { createHashHistory } from 'history';

/* import components */
import App from '../app/App';
import Home from '../home/Home';
import Details from '../details/Details';
import ContactUs from '../contactUs/ContactUs';
import NotFound from '../404/404'

const createHistory = useRouterHistory(createHashHistory);
const history = createHistory({queryKey: false});

class AppRoutes extends Component {
  render() {
    return <Router history={history} onUpdate={() => { window.scrollTo(0, 0) }}>
            <Route path="/" component={App}>
              <IndexRedirect to={Home} />
              <Route path="/about" to={Details} />
              <Route path="/contactUs" to={ContactUs} />
              <Route path="*" component={NotFound} />
            </Route>
          </Router>
  }
}

export default AppRoutes;
