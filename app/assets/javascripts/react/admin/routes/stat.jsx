import classNames   from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header  from 'common/header';
import Sidebar from 'common/sidebar';
import Footer  from 'common/footer';

class Chart extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

class Body extends React.Component {
  componentDidMount() {
    let college_data1 = [
        {x: "0~10  分", y: 0.0},
        {x: "10~19 分", y: 3.0},
        {x: "20~29 分", y: 5.0},
        {x: "30~39 分", y: 8.0},
        {x: "40~49 分", y: 10.0},
        {x: "50~59 分", y: 9.0},
        {x: "60~69 分", y: 10.0},
        {x: "70~79 分", y: 12.0},
        {x: "80~89 分", y: 13.0},
        {x: "90~99 分", y: 11.0},
        {x: "滿分"    , y: 0.0},
      ];

    let college_data2 = [
        {x: "0~10  分", y: 3.0},
        {x: "10~19 分", y: 5.0},
        {x: "20~29 分", y: 16.0},
        {x: "30~39 分", y: 16.0},
        {x: "40~49 分", y: 10.0},
        {x: "50~59 分", y: 10.0},
        {x: "60~69 分", y: 7.0},
        {x: "70~79 分", y: 8.0},
        {x: "80~89 分", y: 4.0},
        {x: "90~99 分", y: 1.0},
        {x: "滿分"    , y: 0.0},
      ];

    let grad_data1 = [
        {x: "0~10  分", y: 0.0},
        {x: "10~19 分", y: 1.0},
        {x: "20~29 分", y: 0.0},
        {x: "30~39 分", y: 1.0},
        {x: "40~49 分", y: 3.0},
        {x: "50~59 分", y: 1.0},
        {x: "60~69 分", y: 4.0},
        {x: "70~79 分", y: 12.0},
        {x: "80~89 分", y: 10.0},
        {x: "90~99 分", y: 12.0},
        {x: "滿分"    , y: 2.0},
      ];

    let grad_data2 = [
        {x: "0~10  分", y: 1.0},
        {x: "10~19 分", y: 0.0},
        {x: "20~29 分", y: 2.0},
        {x: "30~39 分", y: 7.0},
        {x: "40~49 分", y: 9.0},
        {x: "50~59 分", y: 13.0},
        {x: "60~69 分", y: 4.0},
        {x: "70~79 分", y: 6.0},
        {x: "80~89 分", y: 2.0},
        {x: "90~99 分", y: 2.0},
        {x: "滿分"    , y: 0.0},
      ];

    let chartByExamOption = {
      subtitle: '兩次期中考成績比較',
      titleColor: '#EE682F',
      subtitleColor: '#EE682F',
      height: 400,
      axis: {
        x: { name: "", type: 'ordinal', },
        y:  { type: 'linear', tickFormat: 'd' }
      },
      tooltip: {
        color: '#EE682F',
        format: { y: '.0f' }
      },
      grouped: true,
      show_markers: true
    };

    (() => {
      chartByExamOption.title = '大學部';
      var chart = new Rubix('#college-grade', chartByExamOption);

      var midterm1 = chart.column_series({ name: '第一次期中考', color: '#FFC9A0' });
      var midterm2 = chart.column_series({ name: '第二次期中考', color: '#EE682F' });

      midterm1.addData(college_data1);
      midterm2.addData(college_data2);
    })();

    (() => {
      chartByExamOption.title = '研究所';
      var chart = new Rubix('#graduate-grade', chartByExamOption);

      var midterm1 = chart.column_series({ name: '第一次期中考', color: '#FFC9A0' });
      var midterm2 = chart.column_series({ name: '第二次期中考', color: '#EE682F' });

      midterm1.addData(grad_data1);
      midterm2.addData(grad_data2);
    })();

    let chartOption = {
        subtitle: '大學部/研究所比較 (加權比例)',
        titleColor: '#C36849',
        subtitleColor: '#C36849',
        height: 500,
        axis: {
          x: { type: 'ordinal' },
          y: { type: 'linear', tickFormat: '.0f', label: 'Total fruit consumption' }
        },
        tooltip: {
          color: '#C36849',
          format: { y: '.0f' }
        },
        show_markers: true
      };

    (() => {
      chartOption.title = '第一次期中考';
      var chart = new Rubix('#midterm1-grade', chartOption);

      var college = chart.bar_series({ name: '大學部', color: '#E69E8F', marker: 'diamond' });
      var grad = chart.bar_series({ name: '研究所', color: '#3E5F90' });

      let n = college_data1.length;
      let col_percent = [], grad_percent = [];
      for(let i = 0 ; i < n ; i++) {
        let t1 = college_data1[i].y;
        let t2 = grad_data1[i].y * 82/46;
        let y1 = (t1+t2==0)? 0 : t1*100/(t1+t2);
        let y2 = (t1+t2==0)? 0 : t2*100/(t1+t2);
        let label = college_data1[i].x;
        col_percent.push({x: label, y: y1});
        grad_percent.push({x: label, y: y2});
      }
      college.addData(col_percent);
      grad.addData(grad_percent);
    })();

    (() => {
      chartOption.title = '第二次期中考';
      var chart = new Rubix('#midterm2-grade', chartOption);

      var college = chart.bar_series({ name: '大學部', color: '#E69E8F', marker: 'diamond' });
      var grad = chart.bar_series({ name: '研究所', color: '#3E5F90' });

      let n = college_data2.length;
      let col_percent = [], grad_percent = [];
      for(let i = 0 ; i < n ; i++) {
        let t1 = college_data2[i].y;
        let t2 = grad_data2[i].y * 82/46;
        let y1 = (t1+t2==0)? 0 : t1*100/(t1+t2);
        let y2 = (t1+t2==0)? 0 : t2*100/(t1+t2);
        let label = college_data2[i].x;
        col_percent.push({x: label, y: y1});
        grad_percent.push({x: label, y: y2});
      }
      college.addData(col_percent);
      grad.addData(grad_percent);
    })();
  }
  render() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <Chart id='college-grade' />
              <Chart id='graduate-grade' />
              <Chart id='midterm1-grade' />
              <Chart id='midterm2-grade' />
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

