import React, { useState } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const PreferenceScreen = () => {
  // State for preferences
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); // Placeholder

  return (
    // Dark Mode Setting:
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.preferenceItem}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      {/* Placeholder Preference: Notifications */}
      <View style={styles.preferenceItem}>
        <Text style={[styles.text, isDarkMode && styles.darkText]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    backgroundColor: '#282828',
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
  darkText: {
    color: '#ffffff',
  },
});

export default PreferenceScreen;