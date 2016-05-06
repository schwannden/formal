import { Router } from 'react-router';
import Location from 'react-router/lib/Location';

if(window.hasOwnProperty('vex')) {
  vex.defaultOptions.className = 'vex-theme-flat-attack';
}

var onUpdate = (notReady) => {
  // cleanup (do not modify)
  rubix_bootstrap.core.reset_globals_BANG_();
  if(window.Rubix) window.Rubix.Cleanup();

  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
     'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }

  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

  if(!notReady) {
    setTimeout(() => {
      $('body').removeClass('fade-out');
    }, 500);
  }
};

var InitializeRouter = (routes) => {
  onUpdate(true);
  var rootInstance = React.render(routes, document.getElementById('app-container'), () => {
    setTimeout(() => {
      $('body').removeClass('fade-out');
    }, 500);
  });
};

module.exports = (routes) => {
  if('document' in window) {
    InitializeRouter(routes(true, onUpdate));
  } else {
    // called only server side!
    if(__BACKEND__ === 'rails') {
      global.StaticComponent = React.createClass({
        render() {
          var Handler = null;
          var location = new Location(this.props.path, this.props.query);
          ReactBootstrap.Dispatcher.removeAllListeners();
          rubix_bootstrap.core.reset_globals_BANG_();
          Router.run(routes(false), location, (e, i, t) => {
            Handler = <Router {...i} />;
          });
          return Handler;
        }
      });
    } else {
      return () => {
        ReactBootstrap.Dispatcher.removeAllListeners();
        rubix_bootstrap.core.reset_globals_BANG_();
        return routes(false);
      };
    }
  }
};
