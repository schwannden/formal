import classNames from 'classnames';
import TweetActions from 'actions/tweet_actions'

export default class TweetBox extends React.Component {

  constructor(props) {
    super(props);
    this.createTweet = this.createTweet.bind(this);
    this.updatePreview = this.updatePreview.bind(this);
    this.preview   = null;
    this.buffer    = null;
    this.timeout   = null;
    this.mjRunning = false;
    this.mjPending = false;
    this.oldText   = null;
  }

  swapBuffers() {
    let buffer = this.preview, preview = this.buffer;
    this.buffer = buffer; this.preview = preview;
    buffer.style.visibility = "hidden"; buffer.style.position = "absolute";
    preview.style.position = ""; preview.style.visibility = "";
  }

  updatePreview() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.updateCallback, this.delay);
  }

  createPreview() {
    this.timeout = null;
    if (this.mjPending) return;
    var text = document.getElementById("MathInput").value;
    if (text === this.oldtext) return;
    if (this.mjRunning) {
      this.mjPending = true;
      MathJax.Hub.Queue(["createPreview",this]);
    } else {
      this.buffer.innerHTML = this.oldtext = text;
      this.mjRunning = true;
      MathJax.Hub.Queue(
        ["Typeset",MathJax.Hub,this.buffer],
        ["previewDone",this]
      );
    }
  }

  previewDone() {
    this.mjRunning = this.mjPending = false;
    this.swapBuffers();
  }

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

  componentDidMount() {
    this.updateCallback = MathJax.Callback(["createPreview", this]);
    this.updateCallback.autoReset = true;
    this.preview = document.getElementById("MathPreview");
    this.buffer = document.getElementById("MathBuffer");
    $("#MathInput").on('keydown, keypress, keyup, input', this.updatePreview);
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
                        <h6>LaTeX and HTML supported, enclose LaTeX in $$</h6>
                      </Col>
                    </Row>
                  </Grid>
                </PanelHeader>
                <PanelBody>
                  <Textarea rows='3' ref="message" style={{border: 'none'}} id="MathInput" />
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
              <div id="MathBuffer"> </div>
              <div id="MathPreview"> </div>
            </PanelBody>
          </PanelContainer>
        </Col>
      </Row>
    )
  }
}
