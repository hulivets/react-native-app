import { connect } from 'react-redux';

import { onSignIn } from '../../../actions/auth';

import LoginScreen from './LoginScreen';

const mapDispatchToProps = {
    onSignIn,
};

export default connect(
    null,
    mapDispatchToProps,
)(LoginScreen);
