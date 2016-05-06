import { State, Navigation } from 'react-router';
import docCookies from './cookies';
import classNames from 'classnames';

import { Link } from 'react-router';
import { SidebarBtn } from 'global/jsx/sidebar_component';

class Brand extends React.Component {
  render() {
    return (
      <NavHeader {...this.props}>
        <NavBrand tabIndex='-1'>
          <img src='/imgs/logo.png' alt='rubix' width='111' height='28' />
        </NavBrand>
      </NavHeader>
    );
  }
}

var DirectNavItem = React.createClass({
  mixins: [State, Navigation],
  render() {
    var active = false;
    var currentLocation = this.context.router.state.location.pathname;

    if(!active && this.props.path) {
      active = this.isActive(this.props.path) && (currentLocation == this.props.path);
    }

    var classes = classNames({
      'pressed': active
    });
    return (
      <NavItem className={classes} {...this.props}>
        <Link to={this.props.path}>
          <Icon bundle={this.props.bundle || 'fontello'} glyph={this.props.glyph} />
        </Link>
      </NavItem>
    );
  }
});

class Skins extends React.Component {
  switchSkin(skin, e) {
    e.preventDefault();
    e.stopPropagation();
    for(var i=0; i < Skins.skins.length; i++) {
      $('html').removeClass(Skins.skins[i]);
    }
    $('html').addClass(skin);
    vex.close(this.props.id);
  }
  render() {
    return (
      <Grid style={{margin: '-2em'}}>
        <Row>
          <Col xs={12} className='text-center bg-darkgrayishblue75' style={{marginBottom: 25}}>
            <div className='fg-white' style={{fontSize: 24, lineHeight: 1, padding: '25px 10px'}}>
              Choose a theme:
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'default')}>
              <Icon glyph='icon-fontello-stop icon-4x' style={{color: '#E76049'}} />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'green')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkgreen45' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'blue')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-blue' />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'purple')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-purple' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'brown')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-brown' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'cyan')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkcyan' />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Skins.skins = ['default', 'green', 'blue', 'purple', 'brown', 'cyan'];

var HeaderNavigation = React.createClass({
  mixins: [State, Navigation],
  getInitialState() {
    return { selectedFlag: 'United-States' };
  },
  handleSkinSwitch(e) {
    e.preventDefault();
    e.stopPropagation();
    var vexContent;
    vex.dialog.open({
      afterOpen: ($vexContent) => {
        vexContent = $vexContent;
        return React.render(<Skins id={$vexContent.data().vex.id} />, $vexContent.get(0));
      },
      afterClose: () => {
        React.unmountComponentAtNode(vexContent.get(0));
      }
    });
  },
  handleLogout(e) {
    $('body').addClass('fade-out');
    setTimeout(() => {
      this.transitionTo('/');
    }, 250);
  },
  componentDidMount() {
  },
  componentWillUnmount() {
  },
  render() {
    return (
      <NavContent className='pull-right' {...this.props}>
        <Nav className='hidden-xs'>
          <NavItem divider />
          <NavItem className='hidden-sm'>
            <a href='#' onClick={this.handleSkinSwitch}>
              <Icon glyph='icon-fontello-circle' className='fg-theme' style={{lineHeight: 1, fontSize: 24 }} />
            </a>
          </NavItem>
          <NavItem divider />
        </Nav>
        <Nav>
          <NavItem className='logout' href='#' onClick={this.handleLogout}>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </NavContent>
    );
  }
});

export default class Header extends React.Component {
  render() {
    return (
      <Grid id='navbar' {...this.props}>
        <Row>
          <Col xs={12}>
            <NavBar fixedTop id='rubix-nav-header'>
              <Container fluid>
                <Row>
                  <Col xs={3} visible='xs'>
                    <SidebarBtn />
                  </Col>
                  <Col xs={6} sm={4}>
                    <Brand />
                  </Col>
                  <Col xs={3} sm={8}>
                    <HeaderNavigation pressed={this.props.pressed} />
                  </Col>
                </Row>
              </Container>
            </NavBar>
          </Col>
        </Row>
      </Grid>
    );
  }
}
