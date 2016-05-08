import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

class Body extends React.Component {

  componentDidMount() {
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
      events: [
        {
          title: '大學部 - 正規語言概論 - 期中考',
          start: '2016-5/10 10:10',
          end: '2016-5/10 12:00'
        },
        {
          title: '研究所 - 正規語言與計算理論 - 期中考',
          start: '2016-5/12 10:10',
          end: '2016-5/12 12:00'
        },
      ]
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
