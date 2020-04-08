import { connect } from 'react-redux';

import AppContainer from './AppContainer';

function mapStateToProps(state) {
    return {
        isSignIn: state.auth.isSignIn,
    };
}

export default connect(mapStateToProps)(AppContainer);
