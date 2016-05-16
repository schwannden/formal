import classNames from 'classnames';

import TweetActions from 'actions/tweet_actions'
import TweetStore   from 'stores/tweet_store'
import ActionType   from 'action_type'
import Preview      from 'routes/preview'

export default class TweetBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
    this.createTweet = this.createTweet.bind(this);
  }

  getState() {
    let actionType = TweetStore.getActionType();
    return {
      actionType: actionType,
    };
  }

  createTweet(event) {
    event.preventDefault();
    if (this.refs.message.value != '') {
      let form_data = {
        tweet: {
          message: this.refs.message.value
        }
      };
      TweetActions.tweetCreate(form_data);
    }
  }


  componentDidMount() {
    let previewOption = {
      previewId: "TweetPreview",
      bufferId:  "PreviewBuffer",
      inputId:   "TweetMessage",
    };
    new Preview(previewOption);
  }

  render () {
    return (
      <Row>
        <Col sm={6} >
          <PanelContainer controlStyles='bg-blue fg-white'>
            <form onSubmit={this.createTweet}>
              <Panel>
                <PanelHeader className='bg-blue'>
                  <Grid>
                    <Row>
                      <Col xs={12} className='fg-white'>
                        <h3>What{"'"}s On Your Mind?</h3>
                        <h6>LaTeX and HTML supported, enclose LaTeX in $$
                          <a href='https://en.wikibooks.org/wiki/LaTeX/Mathematics'
                             target='_blank' className="reference-hint" > LaTeX Reference 
                          </a>
                        </h6>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Textarea rows='6' ref="message" style={{border: 'none'}} id="TweetMessage" />
                </PanelBody>
                <PanelFooter className='fg-black75 bg-gray' style={{padding: '12.5px 25px'}}>
                  <Grid>
                    <Row>
                      <Col xs={6} >
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-camera icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                      </Col>
                      <Col xs={6} className='text-right' collapseLeft collapseRight>
                        <Button type='submit' bsStyle='darkgreen45'>send</Button>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
              </Panel>
            </form>
          </PanelContainer>
        </Col>
        <Col sm={6}>
          <PanelContainer>
            <PanelHeader className='bg-blue'>
              <Grid>
                <Row>
                  <Col xs={12} className='fg-white'>
                    <h3>Preview</h3>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <div id="PreviewBuffer"> </div>
              <div id="TweetPreview"> </div>
            </PanelBody>
          </PanelContainer>
        </Col>
      </Row>
    )
  }
}
