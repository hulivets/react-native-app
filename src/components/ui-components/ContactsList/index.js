import { connect } from 'react-redux';

import ContactsList from './ContactsList';

function mapStateToProps(state) {
    return {
        contactsData: state.auth.contactsData,
    };
}

export default connect(mapStateToProps)(ContactsList);
