export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: 0
    };
  }
  componentDidMount() {
    this.setState({
      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
    });
  }
  render() {
    return (
      <div id='footer-container'>
        <Grid id='footer' className='text-center'>
          <Row>
            <Col xs={12}>
              <div>© 2016 Schwannden Kuo - schwannden.com </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
