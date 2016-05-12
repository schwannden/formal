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
    this.state = this.getState();
    this._onChange = this._onChange.bind(this);
    TweetActions.getTweets();
  }

  getState() {
    return {
      tweets: TweetStore.getTweets(),
    };
  }

  componentDidMount() {
    $('html').addClass('social');
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    $('html').removeClass('social');
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange () {
    this.setState(this.getState());
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
    return (
      <Container>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
