/* ReactBootstrap */
var ReactBootstrap = {
  Dispatcher: new EventEmitter2({
    maxListeners: 999999999
  })
};

if(window.hasOwnProperty('Chart')) {
  if(Chart.hasOwnProperty('defaults')
    && Chart.defaults.hasOwnProperty('global')) {
    Chart.defaults.global.responsive = true;
  }
}
