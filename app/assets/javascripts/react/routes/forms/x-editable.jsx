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
      mode: 'popup',
      refresh: Body.getCounter() // used to redraw the component
    };
  },
  renderEditable: function() {
    $('.xeditable').editable({
      mode: this.state.mode
    });

    $('#firstname').editable({
      validate: function(value) {
        if($.trim(value) == '') return 'This field is required';
      }
    });

    $('#sex').editable({
      mode: this.state.mode,
      prepend: 'not selected',
      source: [
        {value: 1, text: 'Male'},
        {value: 2, text: 'Female'}
      ],
      display: function(value, sourceData) {
        var colors = {'': 'gray', 1: 'green', 2: 'blue'},
            elem = $.grep(sourceData, function(o){return o.value == value;});

        if(elem.length) {
          $(this).text(elem[0].text).css('color', colors[value]);
        } else {
          $(this).empty();
        }
      }
    });

    $('#status').editable({
      mode: this.state.mode
    });

    $('#group').editable({
      mode: this.state.mode,
      showbuttons: false
    });

    $('#event').editable({
      placement: 'left',
      mode: this.state.mode,
      combodate: {
        firstItem: 'name'
      }
    });

    $('#comments').editable({
      mode: this.state.mode,
      showbuttons: 'bottom'
    });

    $('#state2').editable({
      mode: this.state.mode,
      value: 'California',
      typeahead: {
        name: 'state',
        local: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Dakota','North Carolina','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
      }
    });

    $('#fruits').editable({
      mode: this.state.mode,
      pk: 1,
      limit: 3,
      source: [
        {value: 1, text: 'banana'},
        {value: 2, text: 'peach'},
        {value: 3, text: 'apple'},
        {value: 4, text: 'watermelon'},
        {value: 5, text: 'orange'}
      ]
     });

    $('#tags').editable({
      mode: this.state.mode,
      inputclass: 'input-large',
      select2: {
        tags: ['html', 'javascript', 'css', 'ajax'],
        tokenSeparators: [',', ' ']
      }
    });

    var countries = [];
    $.each({"UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
        countries.push({id: k, text: v});
    });
    $('#country').editable({
      mode: this.state.mode,
      source: countries,
      select2: {
        width: 200,
        placeholder: 'Select country',
        allowClear: true
      }
    });

    $('#address').editable({
      mode: this.state.mode,
      url: '/xeditable/address',
      value: {
        city: 'Moscow',
        street: 'Lenina',
        building: '12'
      },
      validate: function(value) {
        if(value.city == '') return 'city is required!';
      },
      display: function(value) {
        if(!value) {
          $(this).empty();
          return;
        }
        var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
        $(this).html(html);
      }
    });

    var self = this;
    $('#user .editable').on('hidden', function(e, reason){
      if(reason === 'save' || reason === 'nochange') {
        var $next = $(this).closest('tr').next().find('.editable');
        if(self.refs.autoopen.isChecked()) {
          setTimeout(function() {
            $next.editable('show');
          }, 300);
        } else {
          $next.focus();
        }
      }
    });
  },
  handleModeChange: function(mode, e) {
    e.stopPropagation();
    this.setState({mode: mode, refresh: Body.getCounter()}, this.renderEditable);
  },
  toggleEditable: function() {
    $('#user .editable').editable('toggleDisabled');
  },
  componentDidMount: function() {
    this.renderEditable();
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
                          <h3>X-Editable</h3>
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
                              <Label>Change mode:</Label>{' '}
                              <Radio inline defaultChecked name='mode' value='popover' onChange={this.handleModeChange.bind(this, 'popover')}>Popover</Radio>
                              <Radio inline name='mode' value='inline' onChange={this.handleModeChange.bind(this, 'inline')}>Inline</Radio>
                            </Col>
                            <Col xs={6} className='text-right'>
                              <Checkbox inline ref='autoopen'><strong>Auto-open next field</strong></Checkbox>
                              <span style={{marginLeft: 10, marginRight: 10}}></span>
                              <Button outlined bsStyle='green' onClick={this.toggleEditable}>Enable/Disable</Button>
                            </Col>
                          </Row>
                        </Grid>
                      </FormGroup>
                    </Form>
                    <Table striped bordered id='user' style={{margin: 0}}>
                      <tbody>
                        <tr>
                          <td style={{width: 300}}>Simple text field</td>
                          <td>
                            <a href='#' key={this.state.refresh} className='xeditable' data-type='text' data-title='Enter username'>superuser</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Empty text field, required</td>
                          <td>
                            <a href='#' key={this.state.refresh} className='xeditable' id='firstname' data-type='text' data-placeholder='Required' data-pk='1' data-title='Enter firstname'></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Select, local array, custom display</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='sex' data-type='select' data-placeholder='Required' data-pk='1' data-title='Select sex' data-value=''></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Select, remote array, no buttons <strong>(AJAX example)</strong></td>
                          <td>
                            <a href='#' key={this.state.refresh} id='group' data-type='select' data-source='/xeditable/groups' data-placeholder='Required' data-pk='1' data-title='Select group' data-value='5'>Admin</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Select, error while loading</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='status' data-type='select' data-source='/xeditable/status' data-placeholder='Required' data-pk='1' data-title='Select status' data-value='0'>Active</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Combodate (date)</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='dob' className='xeditable' data-type='combodate' data-placeholder='Required' data-pk='1' data-title='Select Date of birth' data-value='1984-05-15' data-format='YYYY-MM-DD' data-viewformat='DD/MM/YYYY' data-template='D / MM / YYYY'></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Combodate (datetime)</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='event' data-type='combodate' data-template='D MMM YYYY  HH:mm' data-format='YYYY-MM-DD HH:mm' data-viewformat='MMM D, YYYY, HH:mm' data-pk='1' data-title='Setup event date and time'></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Textarea, buttons below. Submit by <em>ctrl+enter</em></td>
                          <td>
                            <a href='#' key={this.state.refresh} id='comments' data-type='textarea' data-pk='1' data-placeholder='Your comments here...' data-title='Enter comments'>awesome user!</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Twitter typeahead.js</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='state2' data-type='typeaheadjs' data-pk='1' data-title='Start typing State..'></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Checklist</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='fruits' data-type='checklist' data-value='2,3' data-title='Select fruits'></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Select2 (tags mode)</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='tags' data-type='select2' data-placement='left' data-pk='1' data-title='Enter tags'>html, javascript</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Select2 (dropdown mode)</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='country' data-type='select2' data-pk='1' data-value='BS' data-title='Select country'></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Custom input, several fields</td>
                          <td>
                            <a href='#' key={this.state.refresh} id='address' data-type='address' data-pk='1' data-title='Please, fill address'></a>
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
