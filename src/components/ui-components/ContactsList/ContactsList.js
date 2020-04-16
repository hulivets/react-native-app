import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import RoundButton from '../RoundButton';
import ContactsListItem from '../ContactsListItem';

export default function ContactsList({ contactsData }) {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}>
            <RoundButton
                iconType="add"
                width={52}
                height={52}
                style={styles.roundButton}
            />
            {contactsData.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    name={contact.name}
                    image={contact.image}
                />
            ))}
        </ScrollView>
    );
}

const styles = {
    container: {
        alignItems: 'center',
        overflow: 'hidden',
    },
    roundButton: {
        marginLeft: 20,
        marginRight: 15,
    },
};

ContactsList.propTypes = {
    contactsData: PropTypes.array.isRequired,
};
