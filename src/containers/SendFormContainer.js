import { connect } from 'react-redux';
import SendForm from '../components/SendForm';
import { sendMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(SendForm);
