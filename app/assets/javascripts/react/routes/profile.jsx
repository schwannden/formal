import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  statics: {
    counter: 0,
    getCounter: function() {
      return 'counter-' + ++Body.counter;
    }
  },
  getInitialState: function() {
    return {
      refresh: Body.getCounter() // used to redraw the component
    };
  },
  onSubmit: function() {
    console.log('submit');
  },
  renderEditable: function() {
    $('.xeditable').editable({
      disabled: true,
      mode: 'inline',
    });

    $('#name').editable({
      validate: function(value) {
        if($.trim(value) == '') return 'This field is required';
      }
    });

    var self = this;
    $('#user .editable').on('hidden', function(e, reason){
      if(reason === 'save' || reason === 'nochange') {
        var $next = $(this).closest('tr').next().find('.editable');
        setTimeout(function() {
          $next.editable('show');
        }, 100);
      }
    });
  },

  handleModeChange: function(mode, e) {
    e.stopPropagation();
    this.setState({mode: mode, refresh: Body.getCounter()}, this.renderEditable);
  },

  handleSave: function() {
    $('#user .editable').editable('submit', { 
       url: '/users', 
       ajaxOptions: {
           dataType: 'json' //assuming json response
       },           
       success: function(data, config) {
         $('#user .editable').editable('toggleDisabled');
         $('.save-btn').hide();
         $('.edit-btn').show();
         Messenger().hideAll();
         Messenger().post({
             id: "success",
             type: 'success',
             hideAfter: 10,
             message: "update successful",
             showCloseButton: true
         });
       },
       error: function(error) {
         let errors = error.responseJSON.errors;
         for (let key in errors) { 
           Messenger().post({
             id: key,
             type: 'error',
             hideAfter: 900,
             message: "ERROR: " + key + " " + errors[key],
             showCloseButton: true
           });
         }
       }
   });
  },

  handleEdit: function() {
    $('#user .editable').editable('toggleDisabled');
    $('.edit-btn').hide();
    $('.save-btn').show();
  },

  toggleEditable: function() {
    $('#user .editable').editable('toggleDisabled');
  },
  componentDidMount: function() {
    this.renderEditable();
    Messenger.options = {
      theme: 'flat'
    };
    $('.save-btn').hide();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange75 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3> Profile </h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 25}}>
                    <Form horizontal>
                      <FormGroup>
                        <Grid>
                          <Row>
                            <Col xs={6}>
                              <span style={{marginLeft: 10, marginRight: 10}}></span>
                              <Button className='edit-btn'outlined bsStyle='green' onClick={this.handleEdit}>Edit</Button>
                              <Button className='save-btn' bsStyle='green' onClick={this.handleSave}>Save</Button>
                            </Col>
                          </Row>
                        </Grid>
                      </FormGroup>
                    </Form>
                    <Table striped bordered id='user' style={{margin: 0}}>
                      <tbody>
                        <tr hidden>
                          <td>
                            <a href='#' className='xeditable' data-type='text'
                               data-placeholder='Required' data-name='_method'>patch</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{width: 300}}> Email </td>
                          <td> {user.email} </td>
                        </tr>
                        <tr>
                          <td style={{width: 300}}> Profile Picture </td>
                          <td> Use <a href="https://en.gravatar.com" target="_blank"> Gravatar </a>
                               to create your globally accessible profile picture! </td>
                        </tr>
                        <tr>
                          <td> User Name </td>
                          <td>
                            <a href='#' key={this.state.refresh} className='xeditable' id='name' data-type='text' 
                               data-placeholder='Required' data-name='user[name]'>{user.name}</a>
                          </td>
                        </tr>
                        <tr>
                          <td> New Password </td>
                          <td>
                            <a href='#' key={this.state.refresh} className='xeditable' id='password'
                               data-type='password' data-name='user[password]'></a>
                          </td>
                        </tr>
                        <tr>
                          <td> New Password confirmation </td>
                          <td>
                            <a href='#' key={this.state.refresh} className='xeditable' id='password_confirmation'
                               data-type='password' data-name='user[password_confirmation]'></a>
                          </td>
                        </tr>
                        <tr>
                          <td> Current Password </td>
                          <td>
                            <a href='#' key={this.state.refresh} className='xeditable' id='password' data-type='password' 
                               data-placeholder='Required' data-name='user[current_password]'></a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
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
