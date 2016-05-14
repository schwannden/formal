import classNames from 'classnames';
import { Link }   from 'react-router';

import TweetActions from 'actions/tweet_actions';
import Comment      from 'routes/comment';

export default class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  createMarkup(message) {
    return {__html: message};
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.like_id != -1)
      TweetActions.deleteLike(this.props.like_id);
    else
      TweetActions.createLike(this.props.id);
  }

  createComment(e) {
    e.preventDefault();
    if (this.refs.message.value != '') {
      let form_data = {
        "comment": {
          "to_id": this.props.id,
          "message": this.refs.message.value,
        }
      };
      TweetActions.createComment(form_data);
      this.refs.message.value = ''; 
    }
  }

  deleteComment(e) {
    e.preventDefault();
    TweetActions.deleteComment(this.props.id);
  }


  likeColor() {
    return (this.props.like_id == -1)? '#89949B' : '#2EB398';
  }

  editDiv() {
    return (this.props.editable)? (
      <Link to={"/admin/tweets/" + this.props.id + "/edit"} style={{border: 'none'}}>
        <Icon glyph='icon-fontello-pencil icon-1-and-quarter-x'/>
      </Link>
    ) : '';
  }

  render () {
    let tweet = this.props;
    let comments = this.props.comments.map(comment => <Comment {...comment}/> );
    return (
        <PanelContainer>
          <PanelBody style={{padding: 25, paddingTop: 12.5}}>
            <div className='inbox-avatar'>
              <img src={this.props.gravatar} width='40' height='40' />
              <div className='inbox-avatar-name'>
                <div className='fg-darkgrayishblue75'>{this.props.author}</div>
              </div>
              <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
                {this.editDiv()}
                <div style={{position: 'relative', top: -10}}><small><strong>{this.props.formattedDate}</strong></small></div>
              </div>
            </div>
            <div>
              <div className='fg-text' dangerouslySetInnerHTML={this.createMarkup(this.props.message)}>
              </div>
            </div>
          </PanelBody>
          <PanelFooter noRadius className='fg-black75 bg-gray' style={{padding: '12.5px 25px', margin: 0}}>
            <Grid className='fg-text'>
              <Row>
                <Col xs={6} collapseLeft collapseRight>
                  <a href='#' style={{border: 'none', marginRight: 25, color: this.likeColor()}}
                     onClick={this.handleLike}>
                    <Icon glyph='icon-dripicons-thumbs-up icon-1-and-quarter-x' />
                    <span style={{position: 'relative', top: -2, left: 3}}>Like</span>
                  </a>
                </Col>
                <Col xs={6} className='text-right' collapseLeft collapseRight>
                  <span style={{top: 5, position: 'relative'}}><strong>{this.props.likes}</strong> people like this</span>
                </Col>
              </Row>
            </Grid>
          </PanelFooter>
          <PanelFooter style={{padding: 25, paddingTop: 0, paddingBottom: 0}}>
          {comments}
          </PanelFooter>
          <PanelFooter style={{padding: 12.5}}>
            <form onSubmit={this.createComment.bind(this)}>
              <Textarea ref='message' rows='1' placeholder='Write a comment...' style={{border: 'none'}} />
              <Button xs outlined type='submit' bsStyle='primary'>comment</Button>
            </form>
          </PanelFooter>
        </PanelContainer>
    )
  }
}
