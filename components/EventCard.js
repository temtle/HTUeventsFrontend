import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const EventCard = ({event, onPress}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{event.title}</Text>
            <Text>Club Name: {event.clubName}</Text>
            <Text>Date & Day: {event.date}</Text>
            <Text>Time: {event.time}</Text>
            <Text>Location: {event.location}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'lightgrey',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
    },
    buttonText: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default EventCard;
