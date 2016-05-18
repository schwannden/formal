import classNames from 'classnames';

import TweetBox from 'routes/tweet_box'
import Tweet    from 'routes/tweet'

export default class TweetsList extends React.Component {
  render () {
    let tweets_left = [], tweets_right = [], tweets = [];
    this.props.tweets.map( (tweet, i) => {
      tweets.push(<Tweet {...tweet} />);
      (i%2 == 0)? 
        tweets_left.push(<Tweet {...tweet} />) : 
        tweets_right.push(<Tweet {...tweet} />);
    });
    return (
      <div>
        <TweetBox />
        <Col sm={6} className='hidden-md'>{tweets_left}</Col> 
        <Col sm={6} className='hidden-md'>{tweets_right}</Col>
        <Col sm={12} className='visible-md'>{tweets}</Col>
      </div>
    );
  }
}
