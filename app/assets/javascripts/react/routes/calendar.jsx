import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Body extends React.Component {

  componentDidMount() {
    $.get("/events")
      .success(events => this.setupCalendar(events))
      .error(error => console.log(error));
  }

  setupCalendar(events) {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      slotMinutes: 60,
      defaultView: "agendaWeek",
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: events.map(event => {
        event.start = (new Date(0)).setUTCSeconds(event.start);
        event.end   = (new Date(0)).setUTCSeconds(event.end);
        return event;
      }),
      eventRender: function(event, element, view) {
        $(element).tooltip({
          title: event.title + "<br><br>" + event.description + "<br></br> 地點：" + event.location
        });
      }
    });
  }

  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{marginBottom: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Calendar: Agenda</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody style={{padding: 25}}>
                    <div id='calendar'></div>
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
