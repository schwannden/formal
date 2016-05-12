import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn
} from 'global/jsx/sidebar_component';

import UserStore   from 'stores/user_store'
import path_helper from 'path_helper';

import { Link } from 'react-router';
import md5 from 'md5';

class ApplicationSidebar extends React.Component {
  handleSignout() {
    $.post('/users/sign_out', {_method: "delete"})
      .success()
      .error(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-gauge' name='Quiz' href={path_helper('/quiz')} />
                  <SidebarNavItem glyph='icon-fontello-chat' name='Forum' href={path_helper('/forum')} />
                  <SidebarNavItem href={path_helper('/history')} glyph='icon-fontello-back-in-time' name='History of Computer' />
                  <SidebarNavItem glyph='icon-fontello-calendar' name='Calendar' href={path_helper('/calendar')} />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
        <hr style={{borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}} />
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'> Session </div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-fontello-logout' onClick={this.handleSignout} name='Logout' href="/" />
                  <SidebarNavItem glyph='icon-fontello-user-2' name='Profile' href={path_helper('/profile')} />
                  <SidebarNavItem glyph='icon-fontello-lock-filled' name='Lock Page' href={path_helper('/lock')} />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    let state = UserStore.getState();
    state.name = user.name;
    state.email = user.email;
    state.gravatar = 'http://www.gravatar.com/avatar/' + md5(state.email);
    this.state = state;
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(UserStore.getState());
  }

  render() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src={this.state.gravatar} width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>{this.state.name}</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <Link to={path_helper('/lock')}><Icon id='demo-icon' bundle='fontello' glyph='lock-5' /></Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
