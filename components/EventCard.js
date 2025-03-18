import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useTheme } from './ThemeContext'; // Import component for dark mode

const EventCard = ({event, onPress}) => {
    const { isDarkMode } = useTheme(); // Check if dark mode is on or not

    return (
        // Added the "isDarkMode &&" staments to change styling if dark mode is on
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
            <Text style={[styles.cardTitle, isDarkMode && styles.darkCardTitle]}>{event.title}</Text>
            <Text style={isDarkMode && styles.darkText}>Club Name: {event.clubName}</Text>
            <Text style={isDarkMode && styles.darkText}>Date & Day: {event.date}</Text>
            <Text style={isDarkMode && styles.darkText}>Time: {event.time}</Text>
            <Text style={isDarkMode && styles.darkText}>Location: {event.location}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // Added classes for when dark mode is on, new classes start with "dark"
    card: {
        backgroundColor: 'lightgrey',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    darkCard: {
        backgroundColor: '#808080',
    },
    cardTitle: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
    // darkCardTitle: {
    //     color: '#DD143C',
    // },
    darkText: {
        color: '#ffffff',
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
