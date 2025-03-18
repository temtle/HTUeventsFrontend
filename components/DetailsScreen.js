import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { useTheme } from './ThemeContext'; // Import component for dark mode

const DetailsScreen = ({route}) => {
    const { isDarkMode } = useTheme(); // Check if dark mode is on

    const {event, category} = route.params;
    const description = "This event offers a great opportunity to engage, learn, and connect with peers. Don’t miss out!";
    const rsvps = 42;

    return (
        // Added the "isDarkMode &&" statements to modify styling when dark mode is on
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={[styles.detailsTitle, isDarkMode && styles.darkDetailsTitle]}>{event.title}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Organizing Club: {event.clubName}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Category: {category}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Date & Day: {event.date}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Time: {event.time}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Location: {event.location}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Description: {description}</Text>
            <Text style={[styles.detailsText, isDarkMode && styles.darkDetailsText]}>Number of RSVPs: {rsvps}</Text>
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
    // Added new classes for dark mode, they start with "dark"
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    darkContainer: {
        backgroundColor: '#333333',
    },
    detailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    darkDetailsTitle: {
        color: '#ffffff',
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 10,
    },
    darkDetailsText: {
        color: '#ffffff',
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
