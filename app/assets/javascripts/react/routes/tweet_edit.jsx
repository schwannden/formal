import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';
import {Route, Router, State, Link} from 'react-router';

import TweetActions from 'actions/tweet_actions'
import TweetStore   from 'stores/tweet_store'
import Preview      from 'routes/preview'

import Header  from 'common/header';
import Sidebar from 'common/sidebar';
import Footer  from 'common/footer';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    this.updateTweet = this.updateTweet.bind(this);
  }

  componentDidMount() {
    let previewOption = {
      previewId: "TweetPreview",
      bufferId:  "PreviewBuffer",
      inputId:   "TweetMessage",
    };
    TweetActions.getTweet(window.location.pathname.split('/')[3]);
    new Preview(previewOption);
  }

  componentWillUnmount() {
  }

  updateTweet () {
  }

  getState () {
    let tweet = TweetStore.getTweet();
    return {tweet: tweet};
  }
  
  _onChange() {
  }

  render() {
    return (
      <Container id='body' className='social'>
        <Grid>
        <Row>
          <Col sm={6} >
            <PanelContainer controlStyles='bg-blue fg-white'>
              <form onSubmit={this.updateTweet}>
                <Panel>
                  <PanelHeader className='bg-blue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Update Tweet</h3>
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
        </Grid>
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

