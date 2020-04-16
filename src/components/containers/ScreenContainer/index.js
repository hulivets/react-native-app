import { connect } from 'react-redux';

import { closeBottomPanel } from '../../../actions/bottomPanel';

import ScreenContainer from './ScreenContainer';

function mapStateToProps(state) {
    return {
        panelData: state.view.bottomPanel,
    };
}

const mapDispatchToProps = {
    closeBottomPanel,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenContainer);
