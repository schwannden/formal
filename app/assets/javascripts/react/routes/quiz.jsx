import classNames from 'classnames';
import { Link } from 'react-router';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import ReactStyle from 'global/jsx/react-styles/src/ReactStyle.jsx';

class Body extends React.Component {
  componentDidMount() {
    $('#wizard-1').steps({
      headerTag: "h1",
      bodyTag: "div",
      autoFocus: true
    });

    $('#wizard-3').steps({
      enableAllSteps: true,
      enablePagination: false
    });
  }

  componentWillUnmount() {
  }

  render() {
    let questions = {
      yes_no: [
        {id: "", subQuestions: [
            "Is   $A_{DFA}$ recognizable",
            "Is   $A_{DFA}$ decidable",
            "Is   $E_{DFA}$ recognizable",
            "Is   $E_{DFA}$ decidable",
            "Is  $EQ_{DFA}$ recognizable",
            "Is  $EQ_{DFA}$ decidable",
            "Is $ALL_{DFA}$ recognizable",
            "Is $ALL_{DFA}$ decidable",
          ]},
        {id: "", subQuestions: [
            "Is   $A_{PDA}$ recognizable",
            "Is   $A_{PDA}$ decidable",
            "Is   $E_{PDA}$ recognizable",
            "Is   $E_{PDA}$ decidable",
            "Is  $EQ_{PDA}$ recognizable",
            "Is  $EQ_{PDA}$ decidable",
            "Is $ALL_{PDA}$ recognizable",
            "Is $ALL_{PDA}$ decidable",
          ]},
        {id: "", subQuestions: [
            "Is   $A_{LBTM}$ recognizable",
            "Is   $A_{LBTM}$ decidable",
            "Is   $E_{LBTM}$ recognizable",
            "Is   $E_{LBTM}$ decidable",
            "Is  $EQ_{LBTM}$ recognizable",
            "Is  $EQ_{LBTM}$ decidable",
            "Is $ALL_{LBTM}$ recognizable",
            "Is $ALL_{LBTM}$ decidable",
          ]},
        {id: "", subQuestions: [
            "Is   $A_{TM}$ recognizable",
            "Is   $A_{TM}$ decidable",
            "Is   $E_{TM}$ recognizable",
            "Is   $E_{TM}$ decidable",
            "Is  $EQ_{TM}$ recognizable",
            "Is  $EQ_{TM}$ decidable",
            "Is $ALL_{TM}$ recognizable",
            "Is $ALL_{TM}$ decidable",
          ]},
        {id: "", subQuestions: [
            "Is a PDA the same with a queue instead of a stack?",
            "Is a PDA with a queue more powerful than the original one?",
            "Is a PDA the same with 2 queues instead of a stack?",
            "Is a PDA with 2 queues more powerful than the oiriginal one?",
            "Is a PDA with 3 stacks more powerful than a PDA with 2 stacks?",
            "Is a PDA with 2 stacks the same as a Turing machine?",
          ]},
        {id: "", subQuestions: [
            "Is Turing machine more power than a computer in terms of their ability to solve problems?",
            "If a computer has infinite memory, can we say it is a universal Turing machine? ",
            "Is a Turing machine the same if we say eveytime it reads an input, it must move to left or right, the tape head can not stay where it was?",
            "Is TA handsome?",
            "Is a multi-tape Turing machine the same as that of a single-tape Turing machine?",
            "Is an infinite-tape Turing machine the same as that of a single-tape Turing machine?",
          ]},
      ],
      short_answer: [
        {id: "", question: "We know multi-tap turing machine is the same as a single tap one, then do you think a multi stack PDA is the same as a single stack PDA?"},
        {id: "", question: "Proof that an universal turing machine exists"},
        {id: "", question: "We start this course by asking ourself: \" Is every problem solveable\", then we stopped and realized that we can not further discuss this question before we define what is problem, and what does it mean by \"solve a problem\". In Turing machine model, define \"problem\" and \"solve a problem\"."},
        {id: "", question: "Can we use Turing machine to explain quantumn computer? Brefly argue why or why not?"},
      ],
    };
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noOverflow controlStyles='bg-darkgreen45 fg-white'>
                <Panel>
                  <PanelHeader className='bg-darkgreen45 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3> Yes or No </h3>
                          <h5> system WILL NOT remember your answer, still struggling to find time to finish this task.. </h5>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div id='wizard-1'>
                      {questions.yes_no.map((question) => {
                         return [
                           <h1> {question.id} </h1>,
                           <div> 
                             {question.subQuestions.map(question =>{
                               return [
                                 <span> {question} </span>,
                                 <Button outlined style={{marginRight: 10, marginBottom: 5}} bsStyle='success'> Yes </Button> ,
                                 <Button outlined style={{marginRight: 10, marginBottom: 5}} bsStyle='warning'> No </Button> ,
                                 <br />
                               ];
                             })}
                           </div>
                         ];
                      })}
                    </div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer noOverflow controlStyles='bg-orange75 fg-white'>
                <Panel>
                  <PanelHeader className='bg-orange75 fg-white' style={{margin: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3> Short Answers</h3>
                          <h5> system WILL NOT remember your answer, still struggling to find time to finish this task.. </h5>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <div id='wizard-3'>
                      {questions.short_answer.map((question) => {
                         return [
                           <h1> {question.id} </h1>,
                           <div>
                             <p> {question.question} </p>
                             <Form id='update-answer'>
                               <FormGroup>
                                 <Label htmlFor='add-content'> Type Your Answer Here *</Label>
                                 <Textarea id='add-content' name='content' rows='5' />
                               </FormGroup>
                               <FormGroup>
                                 <Button type='submit' bsStyle='darkgreen45' outlined>Update Answer</Button>
                               </FormGroup>
                             </Form>
                           </div>
                         ];
                      })}
                    </div>
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
    var classes = classNames('dashboard', {
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
