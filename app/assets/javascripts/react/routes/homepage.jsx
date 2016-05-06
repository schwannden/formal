import { State, Navigation } from 'react-router';
import classNames from 'classnames';
import path_helper from 'path_helper';

class Hero extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero')}>
        <Container fixed>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

class HeroHeader extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header')}>
        {this.props.children}
      </div>
    );
  }
}

class HeroHeader2 extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header2')}>
        {this.props.children}
      </div>
    );
  }
}

export default React.createClass({
  handleLogin() {
    $('body').addClass('fade-out');
    setTimeout(() => {
      window.location = '/login';
    }, 250);
  },
  render() {
    return (
      <Container id='homepage-container'>
        <Button bsStyle='deepred' id='demo-btn' onClick={this.handleLogin}>登入或註冊</Button>
        <div>
          <Hero className='text-center hidden-xs' style={{height: 475, backgroundImage: 'url(/imgs/homepage/home_bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
          </Hero>
          <Hero className='text-center visible-xs' style={{height: 270, backgroundImage: 'url(/imgs/homepage/home_bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
          </Hero>
        </div>
        <Hero>
          <HeroHeader>
            <span>{"恭喜你走到了這一步"}</span></HeroHeader>
          <HeroHeader2>{"期中考快到囉～"}<sup><small><BLabel className='bg-deepred fg-white'>Chapter 3 ~ Chapter 5.2</BLabel></small></sup></HeroHeader2>
          <Grid>
            <Row>
              <Col sm={7} collapseLeft collapseRight>
                <p style={{marginTop: 60}}>
                  18世紀的數學家Hilbert，提出了一個世紀性的問題(Entscheidungsproblem)，基本上在問：「是不是所有的問題都可以被解決？」。在數學家開始解決這個問題之前，我們發現，我們需要更清楚的描述什麼叫做『問題』，以及什麼叫做『解決問題』。
                </p>
                <p>
                  在學期初，我們把問題侷限在只能回答「是」或「否」的問題，然後用string作為一個問題的具體呈現，用language (set of string)作為同樣的類型的問題。然後學到了DFA (regular expression), PDF(context free grammer)這些比較簡單的計算模型。現在終於學到了<strong>Turing Machine</strong>，他是我們會學到最完整的計算模型，我們也即將要用他來討論問題本質的特性-- decidability, recognizability, time complexity.
                </p>
              </Col>
              <Col sm={5} collapseLeft collapseRight>
                <div className='hidden-xs text-right'>
                  <img src='/imgs/homepage/reactcode.png' />
                </div>
                <div className='visible-xs text-center'>
                  <img width='250' src='/imgs/homepage/reactcode.png' />
                </div>
              </Col>
            </Row>
          </Grid>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"一些線上資源"}</span>
          </HeroHeader>
          <HeroHeader2>{"除了考古題系統之外.... 課本是不錯的resource.... 可是如果你不喜歡看書...."}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <iframe src="https://www.youtube.com/embed/3x8mSr8ZPGQ" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/DILF8usqp7M?list=PLlO--9bCCRJNpSad8b4-21a72wZSF0fhD" frameborder="0" allowfullscreen></iframe>
          </div>
        </Hero>
        <Hero className='subtle-bottom-shadow'>
          <HeroHeader>{"或者來問助教"}</HeroHeader>
          <HeroHeader2>{"可是幾點注意事項"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <img src='/imgs/homepage/support.png' />
          </div>
          <p className='text-center'>
            <ul>
              <li> {"助教上次修這門課是兩年以前，建議你來之前可以先寄信給我們你要問的問題，我們有時間想想，比較不會浪費你的時間。"} </li>
              <li> {"為了你的方便，直接Facebook助教也是可以(schwannden kuo)，問題直接拍照給我也是可以！"} </li>
              <li> {"期中考前大家各種崩潰，如果助教時間之外想要約問問題，也是可以email或fb來詢問一下喔！最好鳩個三五好友一起不然助教會害羞，阿不對是一直一對一回答一樣的問題助教也是會無聊...."} </li>
            </ul>
          </p>
        </Hero>
        <div>
          <Hero className='text-center' style={{height: 215, backgroundImage: 'url(/imgs/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%'}}>
            <h1 className='fg-white' style={{marginTop: 0, marginBottom: 25, fontWeight: 100}}> 還不快去唸書！！！ </h1>
            <Button lg outlined inverse retainBackground bsStyle='red'> 
              <a href={path_helper('/quiz')}> 進入線上測驗系統 </a>
            </Button>
          </Hero>
        </div>
      </Container>
    );
  }
});
