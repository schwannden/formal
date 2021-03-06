import classNames   from 'classnames';
import {Link}       from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import path_helper from 'path_helper';
import UserActions from 'actions/user_actions'
import ActionType  from 'action_type';
import UserStore   from 'stores/user_store'

import Header  from 'common/header';
import Sidebar from 'common/signin_sidebar';
import Footer  from 'common/footer';

class Body extends React.Component {

  constructor(props) {
    $.get('/current_user')
      .success(data => {
        if(data) { window.location = 'admin/forum' }
      })
      .error(error => console.log(error));

    super(props);
    this.state = this.getState();
    this._onChange = this._onChange.bind(this);
  }

  getState() {
    return {status: UserStore.getStatus()}
  }

  handleSignin(e) {
    e.preventDefault();
    let form_data = {
      user: {
        email: this.refs.email.value,
        password: this.refs.password.value,
        remember_me: this.refs.remember_me.checked? 1 : 0,
      }
    };
    UserActions.signin(form_data);
  }

  componentDidMount() {
    $('html').addClass('authentication');

    Messenger.options = {
      theme: 'flat'
    };

    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    $('html').removeClass('authentication');
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getState(), ()=> {
      switch(this.state.status) {
        case ActionType.SIGNIN_SUCCESSFUL:
            window.location = path_helper('/quiz');
          break;
        case ActionType.SIGNIN_ERROR:
            this.errorNotification();
          break;
        default:
      }
    });
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
              <PanelContainer noControls>
                <Panel>
                  <PanelBody style={{padding: 0}}>
                    <div className='text-center bg-darkblue fg-white'>
                      <h3 style={{margin: 0, padding: 25}}>Sign in to Formal System</h3>
                    </div>
                    <div className='bg-hoverblue fg-black50 text-center' style={{padding: 12.5}}>
                      <div>You need to sign in for those awesome helps</div>
                    </div>
                    <div>
                      <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                        <Form onSubmit={this.handleSignin.bind(this)}>
                          <FormGroup>
                            <InputGroup lg>
                              <InputGroupAddon>
                                <Icon glyph='icon-fontello-mail' />
                              </InputGroupAddon>
                              <Input autoFocus type='email' ref='email' id='emailaddress'
                                className='border-focus-blue' placeholder='schwannden@gmail.com' />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup lg>
                              <InputGroupAddon>
                                <Icon glyph='icon-fontello-key' />
                              </InputGroupAddon>
                              <Input type='password' ref='password' id='password'
                                className='border-focus-blue' placeholder='password' />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup lg>
                              <Input type='checkbox' ref='remember_me' className='border-focus-blue' />
                              Remember Me
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <Grid>
                              <Row>
                                <Col xs={6} collapseLeft collapseRight style={{paddingTop: 10}}>
                                  <Link to='/signup'>Create a Formal account</Link>
                                </Col>
                                <Col xs={6} collapseLeft collapseRight className='text-right'>
                                  <Button outlined lg type='submit' bsStyle='blue'>Login</Button>
                                </Col>
                              </Row>
                            </Grid>
                          </FormGroup>
                        </Form>
                      </div>
                    </div>
                  </PanelBody>
                </Panel>
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
