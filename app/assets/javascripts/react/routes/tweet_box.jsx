import classNames from 'classnames';
import TweetActions from 'actions/tweet_actions'

export default class TweetBox extends React.Component {

  createTweet(event) {
    event.preventDefault();
    if (this.refs.message.value != '') {
      let form_data = {
        tweet: {
          message: this.refs.message.value
        }
      };
      TweetActions.createTweet(form_data);
      this.refs.message.value = '';
    }
  }

  render () {
    return (
      <Col sm={6} >
        <PanelContainer>
          <form onSubmit={this.createTweet.bind(this)}>
            <PanelBody style={{padding: 12.5}}>
              <Textarea rows='3' ref="message" placeholder="What's on your mind? (enclose LaTeX in $$, ex. &#36;\int_0^\infty \sum_{i=1}^m f_m(x) dx &#36;)" style={{border: 'none'}} />
            </PanelBody>
            <PanelFooter className='fg-black75 bg-gray' style={{padding: '12.5px 25px'}}>
              <Grid>
                <Row>
                  <Col xs={6} >
                    <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-camera icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                    <a href='https://en.wikibooks.org/wiki/LaTeX/Mathematics' target='_blank'style={{border: 'none'}}> Quick LaTeX Reference</a>
                  </Col>
                  <Col xs={6} className='text-right' collapseLeft collapseRight>
                    <Button type='submit' bsStyle='darkgreen45'>send</Button>
                  </Col>
                </Row>
              </Grid>
            </PanelFooter>
          </form>
        </PanelContainer>
      </Col>
    )
  }
}
