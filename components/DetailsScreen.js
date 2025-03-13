import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const DetailsScreen = ({route}) => {
    const {event, category} = route.params;
    const description = "This event offers a great opportunity to engage, learn, and connect with peers. Don’t miss out!";
    const rsvps = 42;

    return (
        <View style={styles.container}>
            <Text style={styles.detailsTitle}>{event.title}</Text>
            <Text style={styles.detailsText}>Organizing Club: {event.clubName}</Text>
            <Text style={styles.detailsText}>Category: {category}</Text>
            <Text style={styles.detailsText}>Date & Day: {event.date}</Text>
            <Text style={styles.detailsText}>Time: {event.time}</Text>
            <Text style={styles.detailsText}>Location: {event.location}</Text>
            <Text style={styles.detailsText}>Description: {description}</Text>
            <Text style={styles.detailsText}>Number of RSVPs: {rsvps}</Text>
            <TouchableOpacity
                style={styles.rsvpButton}
                onPress={() => Alert.alert('RSVP Submitted!')}
            >
                <Text style={styles.buttonText}>RSVP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    detailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 10,
    },
    rsvpButton: {
        marginTop: 20,
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default DetailsScreen;
