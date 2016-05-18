import { Route, Router } from 'react-router';
import path_helper from 'path_helper';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Homepage from './routes/homepage';
import Login    from './routes/login';
import Signup   from './routes/signup';

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/'       component={Homepage} />
      <Route path='/login'  component={Login} />
      <Route path='/signup' component={Signup} />
    </Router>
  );
};
