import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn
} from 'global/jsx/sidebar_component';
import path_helper from 'path_helper';

import { Link } from 'react-router';
import LoremIpsum from 'global/jsx/loremipsum';
import path from 'path_helper';

class ApplicationSidebar extends React.Component {
  render() {
    return (
      <div>
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'> 登入使用系統 </div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}}>
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href='/login'/>
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href='/signup' />
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
  render() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.jpg' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}> Welcome </div>
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
