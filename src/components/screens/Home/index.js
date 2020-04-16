import { connect } from 'react-redux';

import { openBottomPanel } from '../../../actions/bottomPanel';

import Home from './Home';

const mapDispatchToProps = {
    openBottomPanel,
};

export default connect(
    null,
    mapDispatchToProps,
)(Home);
