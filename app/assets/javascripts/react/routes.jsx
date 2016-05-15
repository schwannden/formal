import { Route, Router } from 'react-router';
import path_helper from 'path_helper';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Homepage from 'routes/homepage';
import Quiz     from 'routes/quiz';
import Forum    from 'routes/forum';
import History  from 'routes/history';
import Calendar from 'routes/calendar';
import Profile  from 'routes/profile';

import Login from 'routes/login';
import Signup from 'routes/signup';
import Lock from 'routes/lock';

import TweetEdit from 'routes/tweet_edit'

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Homepage} />
      <Route path={path_helper('/quiz')} component={Quiz} />
      <Route path={path_helper('/forum')} component={Forum} />
      <Route path={path_helper('/history')} component={History} />
      <Route path={path_helper('/calendar')} component={Calendar} />

      <Route path={'/login'} component={Login} />
      <Route path={'/signup'} component={Signup} />
      <Route path={path_helper('/profile')} component={Profile} />
      <Route path={path_helper('/lock')} component={Lock} />

      <Route path='/admin/tweets/:id/edit' component={TweetEdit} />

    </Router>
  );
};
