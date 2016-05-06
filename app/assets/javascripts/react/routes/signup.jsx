import classNames   from 'classnames';
import { Link }     from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import path_helper from 'path_helper';
import UserActions from 'actions/user_actions'
import ActionType  from 'action_type'
import UserStore   from 'stores/user_store'

import Header  from 'common/header';
import Sidebar from 'common/signin_sidebar';
import Footer  from 'common/footer';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this._onChange = this._onChange.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let form_data = {
      user: {
        email: this.refs.email.value,
        password: this.refs.password.value,
      }
    };
    UserActions.signup(form_data);
  }

  componentDidMount() {
    Messenger.options = {
      theme: 'flat'
    };

    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    switch(this.state.status) {
      case ActionType.SIGNUP_SUCCESSFUL:
          window.location = path_helper('/quiz');
        break;
      case ActionType.SIGNUP_ERROR:
          this.errorNotification();
        break;
      default:
    }
  }

  errorNotification() {
    let errors = UserStore.getErrors();
    for (let key in errors) { 
      Messenger().post({
        id: key,
        type: 'error',
        hideAfter: 10,
        message: "ERROR: " + key + " " + errors[key],
        showCloseButton: true
      });
    }
  }

  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
                <Panel>
                  <PanelBody style={{padding: 0}}>
                    <div className='text-center bg-darkblue fg-white'>
                      <h3 style={{margin: 0, padding: 25}}>Sign up</h3>
                    </div>
                    <div>
                      <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                          <FormGroup>
                            <InputGroup lg>
                              <InputGroupAddon>
                                <Icon glyph='icon-fontello-mail' />
                              </InputGroupAddon>
                              <Input type='email' ref='email' id='emailaddress' 
                                className='border-focus-blue' placeholder='schwannden@gmail.com' />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup lg>
                              <InputGroupAddon>
                                <Icon glyph='icon-fontello-key' />
                              </InputGroupAddon>
                              <Input type='password' ref='password' id='password' className='border-focus-blue' placeholder='password' />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <Grid>
                              <Row>
                                <Col xs={12} collapseLeft collapseRight>
                                  <Button type='submit' outlined lg bsStyle='blue' block onClick={this.back}>Create account</Button>
                                </Col>
                              </Row>
                            </Grid>
                          </FormGroup>
                        </Form>
                      </div>
                    </div>
                  </PanelBody>
                </Panel>
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
    var classes = classNames('dashboard', {
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
