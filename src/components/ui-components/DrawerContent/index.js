import { connect } from 'react-redux';

import { onLogOut } from '../../../actions/auth';

import DrawerContent from './DrawerContent';

function mapStateToProps(state) {
    return {
        userData: state.auth.userData,
    };
}

const mapDispatchToProps = {
    onLogOut,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DrawerContent);
