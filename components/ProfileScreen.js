import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { useTheme } from './ThemeContext'; // Import component for dark mode

const ProfileScreen = ({navigation}) => {
    const { isDarkMode } = useTheme(); // Check if dark mode is on or not
    const user = {
        name: 'John Doe',
        studentId: '123456',
        email: 'johndoe@htu.edu'
    };

    const handleLogout = () => {
        navigation.replace('Login');
    };

    return (
        // Added the "isDarkMode &&" statements to change the styling if dark mode is on
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Profile</Text>
            <Text style={[styles.info, isDarkMode && styles.darkInfo]}>Name: {user.name}</Text>
            <Text style={[styles.info, isDarkMode && styles.darkInfo]}>Student ID: {user.studentId}</Text>
            <Text style={[styles.info, isDarkMode && styles.darkInfo]}>Email: {user.email}</Text>

            <View>
                <Button title="Logout" onPress={handleLogout} color="red"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Added new classes for dark mode, new classes start with "dark"
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        //backgroundColor: '#3b3b3b',
        padding: 20,
    },
    darkContainer: {
        backgroundColor: '282828',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    darkTitle: {
        color: '#ffffff',
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
    },
    darkInfo: {
        color: '#ffffff',
    },
});

export default ProfileScreen;
