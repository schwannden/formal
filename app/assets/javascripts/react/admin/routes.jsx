import {Route,Router} from 'react-router';
import path_helper    from 'path_helper';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory    from 'react-router/lib/HashHistory';
//sidebar section 1
import Quiz     from './routes/quiz';
import Stat     from './routes/stat';
import Forum    from './routes/forum';
import History  from './routes/history';
import Calendar from './routes/calendar';
//sidebar section 2
import Profile  from './routes/profile';
import Lock from './routes/lock';
//page without direct link
import EditBox from './routes/edit_box'

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path={path_helper('/quiz')} component={Quiz} />
      <Route path={path_helper('/stat')} component={Stat} />
      <Route path={path_helper('/forum')} component={Forum} />
      <Route path={path_helper('/history')} component={History} />
      <Route path={path_helper('/calendar')} component={Calendar} />

      <Route path={path_helper('/profile')} component={Profile} />
      <Route path={path_helper('/lock')} component={Lock} />

      <Route path='/admin/tweets/:id/edit' component={EditBox} />
      <Route path='/admin/tweets/:tweet_id/comments/:id/edit' component={EditBox} />

    </Router>
  );
};
