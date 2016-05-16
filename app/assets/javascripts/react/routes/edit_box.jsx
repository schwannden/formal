import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';
import { Link, State, Route }   from 'react-router';

import TweetActions from 'actions/tweet_actions'
import TweetStore   from 'stores/tweet_store'
import ActionType   from 'action_type'
import Preview      from 'routes/preview'

import Header  from 'common/header';
import Sidebar from 'common/sidebar';
import Footer  from 'common/footer';

class Body extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = this.getState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    let previewOption = {
      previewId: "MessagePreview",
      bufferId:  "PreviewBuffer",
      inputId:   "MessageBox",
    };
    this.preview = new Preview(previewOption);
    this.router  = this.context.router;
    this.params  = this.context.router.state.params;
    this.getDefaultValue();
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  getDefaultValue() {
    switch(this.getTarget()) {
      case "comments":
        TweetActions.commentEdit(this.params.id);
        this.handleUpdate = this.updateComment.bind(this);
        break;
      case "tweets":
        TweetActions.tweetEdit(this.params.id);
        this.handleUpdate = this.updateTweet.bind(this);
        break;
      default:
    }
  }

  getTarget() {
    return window.location.pathname.split('/')[2];
  }

  updateTweet(e) {
    e.preventDefault();
    if(this.refs.message.value != '') {
      let form_data = {
        tweet: {
          message: this.refs.message.value,
        },
        _method: "patch",
      };
      TweetActions.tweetUpdate(this.params.id, form_data);
    }
  }

  updateComment(e) {
    e.preventDefault();
    if(this.refs.message.value != '') {
      let form_data = {
        tweet: {
          message: this.refs.message.value,
        },
        _method: "patch",
      };
      TweetActions.commentUpdate(this.params.to_id, this.params.id, form_data);
    }
  }

  getState () {
    return {
      message: TweetStore.getTweet().message,
      actionType: TweetStore.getActionType()
    };
  }
  
  _onChange() {
    this.setState(this.getState(), () => {
      switch (this.state.actionType) {
        case ActionType.TWEET_EDIT:
          $('#MessageBox').val(this.state.message);
          this.preview.updatePreview();
          break;
        case ActionType.TWEET_UPDATE:
          this.router.transitionTo('/admin/forum');
          break;
        default:
      }
    });
  }

  render() {
    return (
      <Container id='body' className='social'>
        <Grid>
        <Row>
          <Col sm={6} >
            <PanelContainer controlStyles='bg-blue fg-white'>
              <form onSubmit={this.handleUpdate}>
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
                    <Textarea rows='6' ref="message"
                      style={{border: 'none'}} id="MessageBox"/>
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
                <div id="MessagePreview"> </div>
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

