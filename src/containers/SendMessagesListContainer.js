import { connect } from 'react-redux';
import SendMessagesList from '../components/SendMessagesList';
import { getStatus } from '../actions';

const mapStateFromProps = state => ({
  messages: state.messagesReducer.messages,
});
const mapDispatchFromProps = dispatch => ({
  getStatus: trackId => dispatch(getStatus(trackId)),
});

export default connect(
  mapStateFromProps,
  mapDispatchFromProps
)(SendMessagesList);
