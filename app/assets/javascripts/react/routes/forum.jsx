import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import TweetActions from 'actions/tweet_actions'
import TweetStore   from 'stores/tweet_store'
import TweetsList   from 'routes/tweets_list'

import Header  from 'common/header';
import Sidebar from 'common/sidebar';
import Footer  from 'common/footer';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = TweetStore.getState();
    this._onChange = this._onChange.bind(this);
    TweetActions.getTweets();
  }

  componentDidMount() {
    $('html').addClass('social');
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
    $('html').removeClass('social');
  }

  _onChange () {
    this.setState(TweetStore.getState(), () => {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    });
  }

  render() {
    return (
      <Container id='body' className='social'>
        <Grid>
          <TweetsList tweets={this.state.tweets}/>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
