import React from 'react';
import { ScrollView } from 'react-native';
// import PropTypes from 'prop-types';

import RoundButton from '../RoundButton';
import ContactsListItem from '../ContactsListItem';

const CONTACTS_DATA = [
    {
        id: 1,
        name: 'Mike',
        image: 'avatar1',
    },
    {
        id: 2,
        name: 'Joshpeh',
        image: 'avatar1',
    },
    {
        id: 3,
        name: 'Ashley',
        image: '',
    },
];

export default function ContactsList() {
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
            {CONTACTS_DATA.map(contact => (
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
