import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons';
// Component imports:
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import ProfileScreen from "./components/ProfileScreen";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
//New imports below vv
import SettingScreen from "./components/SettingScreen"; // Import the new settings component
import PreferenceScreen from "./components/PreferenceScreen"; // Import one of the settings, called preferences
// Dark theme imports:
import { ThemeProvider } from './components/ThemeContext';
import { useTheme } from './components/ThemeContext';

// Light and dark themes for home
const lightTheme = {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#ffffff',
      card: '#f5f5f5',
      text: '#333333',
      border: '#cccccc',
    },
    fonts: {
      medium: 'System', // this property must be added to fix an error, but you can use any default font you want
    },
  };
  
  const darkTheme = {
    dark: true,
    colors: {
      primary: 'rgb(10, 132, 255)',
      background: '#282828',
      card: '#1e1e1e',
      text: '#ffffff',
      border: '#404040',
    },
    fonts: {
      medium: 'System',
    },
  };

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// New SettingStack for organized settings structure
const SettingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Preferences" component={PreferenceScreen} />
        </Stack.Navigator>
    );
};

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}
                          options={{title: 'Event Details'}}/>
        </Stack.Navigator>
    );
};

const MainTabNavigator = () => {
    const { isDarkMode } = useTheme(); // Check if dark mode is on

    return ( // Profile Screen's tab navigation item was removed, and the ProfileScreen is now accessed through settings
        // Added more screenoptions for dark mode functionality
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: isDarkMode ? '#81b0ff' : '#0a7ff5',
            tabBarInactiveTintColor: isDarkMode ? '#757575' : '#a3a3a3',
            tabBarStyle: {
                backgroundColor: isDarkMode ? '#323232' : '#ffffff'
            }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="home" size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen // new Settings navigation item in the navigation bar
                name="Settings"
                component={SettingStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="settings" size={size} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    const { isDarkMode } = useTheme(); // Check if dark mode is on

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }, // Apply the theme
            }}>

            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="MainApp" component={MainTabNavigator}/>
        </Stack.Navigator>
    );
};

const AppWithTheme = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}> {/* Default to light theme */}
            <AppNavigator/>
        </NavigationContainer>
    );
};

export default function App() {
    return (
      <ThemeProvider>
        <AppWithTheme />
      </ThemeProvider>
    );
  }
