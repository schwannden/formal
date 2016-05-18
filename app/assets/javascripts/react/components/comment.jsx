import {Link} from 'react-router';

export default class Comment extends React.Component {

  createMarkup(message) {
    return {__html: message};
  }

  editDiv() {
    return (this.props.editable)? (
      <Link to={"/admin/tweets/" + this.props.to_id + "/comments/" + this.props.id + "/edit"} style={{border: 'none'}}>
        <Icon glyph='icon-fontello-pencil icon-1-and-quarter-x'/>
      </Link>
    ) : '';
  }


  render () {
    return (
      <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
        <img src={this.props.gravatar} width='30' height='30' />
        <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
          {this.editDiv()}
          <span><small><strong>{this.props.formattedDate}</strong></small></span>
        </div>
        <span className='fg-darkgrayishblue75 comment-author'>{this.props.author}</span>
        <span className='fg-text comment-message'><small dangerouslySetInnerHTML={this.createMarkup(this.props.message)}></small></span>
      </div>
    );
  }

}
