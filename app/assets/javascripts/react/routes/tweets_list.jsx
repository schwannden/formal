import classNames from 'classnames';

import TweetBox from 'routes/tweet_box'
import Tweet    from 'routes/tweet'

export default class TweetsList extends React.Component {
  render () {
    let tweets = [<Col sm={6}></Col>, <Col sm={6}></Col>];
    tweets[0].props.children = this.props.tweets.map( (tweet, i) => {
      return tweet.float_direction = (i%2 == 0)? (<Tweet {...tweet} />) : "";
    });
    tweets[1].props.children = this.props.tweets.map( (tweet, i) => {
      return tweet.float_direction = (i%2 == 1)? (<Tweet {...tweet} />) : "";
    });
    return (
      <div>
        <TweetBox />
        {tweets}
      </div>
    );
  }
}
