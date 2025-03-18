import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import EventCard from './EventCard';
import { useTheme } from './ThemeContext'; // Import component for dark mode

const eventData = {
    volunteering: [
        {
            id: '1',
            title: 'Community Clean-Up',
            clubName: 'Green Volunteers',
            date: '2025-03-15 (Saturday)',
            time: '10:00 AM',
            location: 'Main Campus',
        },
        {
            id: '2',
            title: 'Food Drive',
            clubName: 'Helping Hands',
            date: '2025-03-16 (Sunday)',
            time: '2:00 PM',
            location: 'Student Center',
        },
    ],
    clubs: [
        {
            id: '3',
            title: 'Tech Talk',
            clubName: 'GDG On Campus HTU',
            date: '2025-03-17 (Monday)',
            time: '4:00 PM',
            location: 'Tech Building',
        },
        {
            id: '4',
            title: 'Art Workshop',
            clubName: 'Creative Minds',
            date: '2025-03-18 (Tuesday)',
            time: '6:00 PM',
            location: 'Art Studio',
        },
    ],
    htuEvents: [
        {
            id: '5',
            title: 'University Fair',
            clubName: 'HTU Organizers',
            date: '2025-03-19 (Wednesday)',
            time: '1:00 PM',
            location: 'Auditorium',
        },
        {
            id: '6',
            title: 'Open House',
            clubName: 'HTU Events',
            date: '2025-03-20 (Thursday)',
            time: '3:00 PM',
            location: 'Main Campus',
        },
    ],
};

const HomeScreen = ({navigation}) => {
    const { isDarkMode } = useTheme(); // Check if dark mode is on or not
    return (
        // Added the "isDarkMode &&" statements to change styling if dark mode is on
        <ScrollView style={styles.container}>
            <View>
                <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Volunteering</Text>
                {eventData.volunteering.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onPress={() =>
                            navigation.navigate('Details', {event, category: 'Volunteering'})
                        }
                    />
                ))}
            </View>
            <View>
                <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Clubs</Text>
                {eventData.clubs.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onPress={() =>
                            navigation.navigate('Details', {event, category: 'Clubs'})
                        }
                    />
                ))}
            </View>
            <View>
                <Text style={[styles.header, isDarkMode && styles.darkHeader]}>HTU Events</Text>
                {eventData.htuEvents.map(event => (
                    <EventCard
                        key={event.id}
                        event={event}
                        onPress={() =>
                            navigation.navigate('Details', {event, category: 'HTU Events'})
                        }
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // Added darkHeader class, and used it above if dark mode is on
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 35,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    darkHeader: {
        color: '#ffffff',
    }
});

export default HomeScreen;
