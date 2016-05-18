import md5                     from 'md5';
import {Link,State,Navigation} from 'react-router';
import classNames              from 'classnames';
import SidebarMixin            from 'global/jsx/sidebar_component';

import UserStore   from 'stores/user_store';
import UserActions from 'actions/user_actions';

import Header  from 'common/header';
import Sidebar from 'common/sidebar';
import Footer  from 'common/footer';

var Body = React.createClass({

  interval: null,

  getTimeState: function() {
    return {
      time: moment().format('hh:mm:ss'),
      date: moment().format('dddd, MMMM YYYY')
    }
  },

  getInitialState: function() {
    return {
      time: null,
      date: null,
      user: UserStore.getUser(),
    };
  },

  back: function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.history.back();
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
    clearInterval(this.interval);
    $('html').removeClass('authentication');
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
    UserActions.get_user();
    $('html').addClass('authentication');
    this.interval = setInterval(function() {
      this.setState(this.getTimeState());
    }.bind(this), 500);
  },

  _onChange: function() {
    this.setState(this.getState())
  },

  getState: function() {
    return {
      user: UserStore.getUser(),
    };
  },

  render: function() {
    return (
      <Container id='auth-container' className='lockpage'>
        <Container id='auth-row'>
          <Container id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={12} className='text-center'>
                  <h1 className='fg-white' style={{fontSize: 81, fontWeight: 300}}>{this.state.time}</h1>
                  <h6 className='fg-white'>{this.state.date}</h6>
                </Col>
              </Row>
              <Row style={{marginTop: 50}}>
                <Col sm={12} className='text-center'>
                  <Form onSubmit={this.back}>
                    <Label>{this.state.user.name}</Label>
                    <img src={this.state.user.gravatar} width='128' height='128' alt='avatar' />
                    <Input type='password' placeholder='Password' autoFocus />
                    <Button type='submit' className='hidden'>Unlock</Button>
                  </Form>
                </Col>
              </Row>
            </Grid>
          </Container>
        </Container>
      </Container>
    );
  }
});

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
