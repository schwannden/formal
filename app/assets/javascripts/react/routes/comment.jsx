export default class Comment extends React.Component {

  createMarkup(message) {
    return {__html: message};
  }

  render () {
    return (
      <div className='inbox-avatar' style={{borderBottom: '1px solid #EAEDF1'}}>
        <img src={this.props.gravatar} width='30' height='30' style={{verticalAlign: 'top', top: 10, position: 'relative'}} />
        <div className='inbox-avatar-name'>
          <div className='fg-darkgrayishblue75'>{this.props.author}</div>
          <div className='fg-text'><small dangerouslySetInnerHTML={this.createMarkup(this.props.message)}></small></div>
        </div>
        <div className='inbox-date hidden-sm hidden-xs fg-text text-right'>
          <div><small><strong>{this.props.formattedDate}</strong></small></div>
        </div>
      </div>
    );
  }

}
