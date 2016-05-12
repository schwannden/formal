import classNames from 'classnames';

import TweetBox from 'routes/tweet_box'
import Tweet    from 'routes/tweet'

export default class TweetsList extends React.Component {
  render () {
    let tweets_left = [], tweets_right = [];
    this.props.tweets.map( (tweet, i) => {
      tweet.float_direction = (i%2 == 0)? 
        tweets_left.push(<Tweet {...tweet} />) : 
        tweets_right.push(<Tweet {...tweet} />);
    });
    return (
      <div>
        <TweetBox />
        <Col sm={6}>{tweets_left}</Col> 
        <Col sm={6}>{tweets_right}</Col>
      </div>
    );
  }
}
