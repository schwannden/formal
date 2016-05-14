import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import TweetActions from 'actions/tweet_actions'
import TweetStore   from 'stores/tweet_store'
import ActionType   from 'action_type'
import TweetsList   from 'routes/tweets_list'

import Header  from 'common/header';
import Sidebar from 'common/sidebar';
import Footer  from 'common/footer';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    this._onChange = this._onChange.bind(this);
    TweetActions.tweetIndex();
  }

  getState() {
    return {
      tweets: TweetStore.getTweets(),
      actionType: TweetStore.getActionType(),
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
    this.setState(this.getState(), () => {
      switch (this.state.actionType) {
        case ActionType.TWEET_CREATE:
          $("#TweetPreview").text("");
          $("#PreviewBuffer").text("");
          $("#TweetMessage").val("");
        case ActionType.TWEET_INDEX:
          MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
          break;
        default:
      }
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
