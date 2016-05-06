import classNames from 'classnames';

import TweetBox from 'routes/tweet_box'
import Tweet    from 'routes/tweet'

export default class TweetsList extends React.Component {
  render () {
    let tweets = this.props.tweets.map( (tweet, i) => {
      tweet.float_direction = (i%2 == 1)? "left" : "right";
      return (<Tweet {...tweet} />);
    });
    return (
      <Row>
        <TweetBox />
        {tweets}
      </Row>
    );
  }
}
