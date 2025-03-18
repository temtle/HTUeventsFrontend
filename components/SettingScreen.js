import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { useTheme } from './ThemeContext';
// The settings screen has its own stack, which will load every setting from the list
// For example, when pressing the profile button, it will load the ProfileScreen component as a stack

const SettingScreen = ({navigation}) => {
    const { isDarkMode } = useTheme(); // Get current theme state

    const settingsOptions = [ // List of all options to be listed in the settings screen
        // Make sure every listed item exists in SettingStack in App.js!!!

        // The title is what is displayed for the user, the screen is where the app will navigate to
        // Theoretically we could just use title, but it's better to keep the title and screen names seperate for the future
        // e.g. App.js line 21, where the screen's name property is "Profile", should match the screen property in this list
        {id: "1", title: "Profile", screen: "Profile"}, // Access to profile screen is now through settings
        {id: "2", title: "Preferences", screen: "Preferences"}, // New component for preferences
        //{id: "3", title: "Test", screen: "TestScreen"},
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={settingsOptions}
                keyExtractor={(item) => item.id}
                renderItem = {({ item, index }) => ( // Get the item and its index
                    <TouchableOpacity
                        style ={[
                            styles.row,
                            index === settingsOptions.length - 1 && styles.lastRow, // Remove underline for last item
                        ]}
                        onPress={() => navigation.navigate(item.screen)} // Navigates to an item in the SettingStack inside App.js
                                                                         // Which is equivalent to the value of item.screen
                                                                         // This is why the screen string in the SettingsOptions and
                                                                         //   the name string in the SettingStack must match 
                    >
                        <Text style={[styles.rowText, isDarkMode && styles.darkRowText]}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor = "#3b3b3b",
        paddingTop: 50,
    },
    row: {
        padding: 20,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderBottomColor: "#dddddd",
        marginHorizontal: 8,
    },
    rowText: {
        fontSize: 18,
        color: '#333333'
    },
    darkRowText: {
        color: '#ffffff',
    },
    lastRow: {
        borderBottomWidth: 0, // Remove underline for the last item
      },
});

export default SettingScreen;